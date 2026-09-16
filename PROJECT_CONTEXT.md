# 科研论文复现指导平台

## 1. 项目概述

本项目是一套面向研究生的科研论文阅读与复现指导网站，第一阶段重点面向控制科学与工程、自动化、机器人、无人机、电机和工业控制方向。

产品目标不是自动运行用户代码，也不是简单生成论文摘要，而是将论文、公式、实验配置和相关代码整理成一份可检索、可理解、可执行的复现指导手册。

核心目标：

```text
从“看不懂论文”
到“知道论文在做什么”
再到“知道如何一步一步复现”
```

## 2. 产品边界

### 第一阶段支持

- 上传和保存 PDF 论文
- 解析论文标题、章节、正文、公式、图表和页码
- 提取控制类论文的核心字段
- 关键词、模糊词和语义搜索
- 上传或识别 GitHub 代码
- 代码文件树和静态阅读
- 生成基础复现手册
- 记录用户复现进度、笔记和问题

### 第一阶段暂不支持

- 自动运行用户代码
- 自动安装第三方依赖
- 自动修改用户代码
- 在线训练模型
- 多 GPU 调度
- 真实机器人控制
- 自动宣称论文已经复现成功

## 3. 核心产品逻辑

产品的核心不是开放式聊天，而是建立以下关联链：

```text
论文原文
  ↕
结构化字段
  ↕
公式、变量和假设
  ↕
代码文件和函数
  ↕
实验配置和评价指标
  ↕
复现步骤
```

每个重要结论都应尽量保留证据来源，包括：

- 论文页码
- 章节名称
- 公式编号
- 原文片段
- 代码文件和行号
- 证据类型
- 置信度

证据类型包括：

```text
论文明确给出
代码中找到
根据公式推断
为了运行而假设
完全缺失
```

## 4. 推荐系统架构

系统运行在自己的 Linux 服务器上，第一阶段使用 Docker Compose 部署在一台服务器中。

```text
用户浏览器
    ↓ HTTPS
Nginx
    ├── Next.js 前端
    └── FastAPI 后端
             ├── PostgreSQL + pgvector
             ├── Redis
             ├── MinIO
             └── Worker
                    └── 大模型 API 或本地模型
```

### 主要组件

| 组件 | 作用 |
|---|---|
| Next.js | 网站前端和页面路由 |
| TypeScript | 前端类型约束 |
| Tailwind CSS | 前端样式 |
| FastAPI | 后端 API 和业务逻辑 |
| PostgreSQL | 用户、论文和任务等结构化数据 |
| pgvector | 文本和代码向量检索 |
| Redis | 任务队列、缓存和任务状态 |
| Worker | PDF 解析、代码分析和 AI 分析等耗时任务 |
| MinIO | PDF、代码压缩包和报告等文件存储 |
| Nginx | 反向代理、域名和 HTTPS |
| Docker Compose | 管理所有服务 |

## 5. AI 调用和成本控制原则

不要让大模型负责所有工作。系统应采用：

```text
规则和开源工具负责文件解析
向量检索负责寻找相关内容
大模型只负责语义抽取、判断和解释
```

### 尽量不调用大模型的工作

- PDF 基础文本提取
- 标题、章节和页码识别
- 公式编号和图表识别
- 文件树展示
- Python 函数和类识别
- 关键词搜索
- 普通模糊搜索
- 向量生成（优先使用本地 Embedding 模型）

### 主要调用大模型的工作

- 控制领域字段抽取
- 复杂公式解释
- 论文与代码的语义关联
- 对矛盾或缺失信息进行判断
- 根据结构化数据生成复现手册
- 用户主动提出的复杂问题

### 降低 token 消耗的方法

1. 按主题批量分析，不对每个段落单独调用模型。
2. 上传后只做基础分析，深度分析采用按需触发。
3. 先用关键词、规则和向量检索缩小候选内容，再发送给大模型。
4. 使用固定 JSON Schema，避免生成大量无结构文本。
5. 使用内容哈希、Prompt 版本和模型名称建立缓存。
6. 简单任务使用小模型，复杂判断才使用强模型。
7. Embedding 优先使用服务器本地模型，避免重复调用外部 API。
8. 复现手册根据数据库中的结构化字段生成，不重复发送整篇论文。

## 6. 可参考的 GitHub 开源项目

### 文档和论文解析

- [Docling](https://github.com/docling-project/docling)：PDF、Word、表格、公式、代码块和多种文档格式解析。
- [GROBID](https://github.com/grobidOrg/grobid)：科学论文结构、参考文献、图表引用和页码信息解析。

第一版优先选择 Docling。后续如果需要更强的科学论文结构和参考文献处理，再加入 GROBID。

### 代码静态分析

- [Tree-sitter](https://github.com/tree-sitter/tree-sitter)：多种编程语言的语法树解析。
- Python AST：Python 标准库，用于识别 Python 函数、类和调用关系。

### 检索和 Embedding

- [pgvector](https://github.com/pgvector/pgvector)：在 PostgreSQL 中实现向量检索。
- [FlagEmbedding](https://github.com/FlagOpen/FlagEmbedding)：本地 Embedding 和重排序模型。

### RAG 参考

- [PaperQA2](https://github.com/Future-House/paper-qa)：参考本地索引、缓存、证据检索和非 Agent 查询方式。
- [LightRAG](https://github.com/HKUDS/LightRAG)：参考检索和知识关联思路，但第一版不直接依赖它。
- [RAGFlow](https://github.com/infiniflow/ragflow)：参考复杂文档理解和 RAG 产品形态，但第一版不部署完整 RAGFlow。

## 7. 分阶段搭建路线

### 阶段 0：开发基础

平台：本地电脑、GitHub、VS Code。

学习和准备：

- Git 和 GitHub
- 命令行
- JavaScript 和 Python 基础
- Node.js
- JSON
- HTTP 请求

阶段成果：能够创建项目、运行项目、修改代码、查看错误和提交代码。

### 阶段 1：前端页面

类型：前端。

技术：Next.js、TypeScript、Tailwind CSS。

搭建：

- 首页
- 论文上传页
- 论文列表页
- 论文详情页
- 复现手册页

阶段成果：可以在浏览器中看到完整的静态网站界面。

### 阶段 2：后端 API

类型：后端。

技术：Python、FastAPI、Pydantic。

搭建：

```text
GET  /api/health
GET  /api/papers
POST /api/papers
GET  /api/papers/{id}
```

阶段成果：后端能够接收请求并返回 JSON 数据。

### 阶段 3：数据库

类型：后端和数据层。

技术：PostgreSQL、SQLAlchemy、Alembic。

第一批数据表：

- users
- papers
- paper_files
- analysis_jobs

阶段成果：前端创建论文后，后端可以将论文信息保存到数据库并再次读取。

### 阶段 4：文件上传和存储

类型：前端、后端和文件系统。

技术：文件上传、MinIO。

开发顺序：

```text
先保存到本地 uploads 目录
→ 熟悉上传流程
→ 再改为保存到 MinIO
```

阶段成果：用户可以通过网页上传 PDF，并在论文列表中看到文件。

### 阶段 5：PDF 解析

类型：后端、文档处理。

技术：Docling 或 GROBID。

流程：

```text
PDF
→ 提取文字
→ 识别章节
→ 保留页码
→ 保存文本片段
→ 前端展示论文结构
```

阶段成果：网站可以显示论文标题、章节和正文，并支持按页码定位。

### 阶段 6：基础 AI 分析

类型：后端、AI。

平台：外部大模型 API，或服务器上的 Ollama。

第一版只实现：

```text
摘要和方法部分
→ 研究问题
→ 主要贡献
→ 研究方法
```

阶段成果：每篇论文拥有一份结构化的 AI 分析结果。

### 阶段 7：搜索系统

类型：后端、检索。

开发顺序：

```text
PostgreSQL 全文搜索
→ 模糊匹配
→ 本地 Embedding
→ pgvector 语义检索
```

阶段成果：用户输入关键词后，可以看到匹配片段、章节和页码。

### 阶段 8：代码阅读

类型：后端和前端。

技术：Python AST、Tree-sitter、代码高亮组件。

开发顺序：

```text
上传代码压缩包
→ 展示文件树
→ 展示代码
→ 识别 Python 函数
→ 保存文件和行号
```

阶段成果：用户可以在网页中阅读代码，并定位重要文件和函数。

### 阶段 9：异步任务

类型：后端基础设施。

技术：Redis、Worker、Celery/RQ/Arq。

流程：

```text
用户上传论文
→ FastAPI 创建任务
→ Redis 保存任务
→ Worker 后台处理
→ 前端显示进度
```

阶段成果：论文解析和 AI 分析不会阻塞网页请求。

### 阶段 10：用户工作区

类型：前端、后端。

搭建：

- 用户注册和登录
- 保存论文
- 创建复现任务
- 勾选复现步骤
- 添加笔记
- 记录问题
- 上传实验结果
- 导出报告

阶段成果：用户可以围绕一篇论文持续管理自己的复现过程。

### 阶段 11：部署上线

平台：Linux 服务器。

技术：Docker Compose、Nginx、域名、HTTPS。

部署服务：

```text
Nginx
Next.js
FastAPI
Worker
PostgreSQL
Redis
MinIO
```

上线流程：

```text
本地开发
→ GitHub 提交代码
→ 服务器拉取代码
→ 配置环境变量
→ Docker Compose 构建
→ 配置 Nginx
→ 绑定域名和 HTTPS
→ 测试网站
```

## 8. 第一版最小目标

第一版不要同时实现所有功能，先完成以下闭环：

```text
Next.js 上传页面
→ FastAPI 接收 PDF
→ PostgreSQL 保存论文信息
→ MinIO 保存文件
→ Docling 解析 PDF
→ 前端展示章节
→ 调用一次 AI 生成论文概览
```

完成这个闭环后，再依次加入搜索、代码阅读、复现手册、异步任务、用户工作区和正式部署。

## 9. 暂时不使用的技术

第一版暂时不需要：

- Kubernetes
- 独立向量数据库
- 图数据库
- 多 Agent 框架
- 完整 RAGFlow 部署
- 完整 LightRAG 部署
- GPU 集群
- 在线代码执行沙箱
- 多学科同时支持

原则是先完成一个可以真正使用的垂直闭环，再逐步扩展系统。
