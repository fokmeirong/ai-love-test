# 项目设计文档

## 目录结构详解

project-root/
├── app/                # Next.js App Router 目录
│   ├── layout.tsx     # 根布局组件，定义全局页面结构
│   ├── page.tsx       # 首页组件，对应路由 "/"
│   └── favicon.ico    # 网站图标
├── components/         # 可复用组件目录
│   ├── ui/            # 基础UI组件
│   └── shared/        # 共享业务组件
├── public/            # 静态资源目录
│   ├── images/        # 图片资源
│   └── fonts/         # 字体文件
├── styles/            # 样式文件目录
│   └── globals.css    # 全局样式定义
├── lib/               # 工具库和辅助函数
├── types/             # TypeScript 类型定义
├── .eslintrc.json    # ESLint 配置
├── next.config.js    # Next.js 配置文件
├── package.json      # 项目依赖和脚本配置
├── postcss.config.js # PostCSS 配置
├── README.md         # 项目说明文档
├── tailwind.config.ts # Tailwind CSS 配置
├── tsconfig.json     # TypeScript 配置
└── design.md         # 本设计文档

## 技术要点

### 开发环境
- 开发语言: TypeScript
- 构建工具: Next.js
- 开发框架: React 18+
- 包管理器: npm/yarn/pnpm/bun (均支持)
- 样式工具: Tailwind CSS
- 代码规范: ESLint + TypeScript

### 核心功能
1. 页面路由
   - 基于 Next.js 13+ App Router
   - 文件系统路由
   - 支持布局嵌套
   - 自动路由优化
   
2. 性能优化
   - 自动字体优化 (next/font)
   - 使用 Geist 字体
   - 自动图片优化 (next/image)
   - 服务端渲染 (SSR)
   - 自动代码分割

3. 开发体验
   - TypeScript 类型支持
   - 快速刷新 (Fast Refresh)
   - 开发时错误提示
   - ESLint 代码检查

### 技术架构
- 架构设计：Next.js App Router 架构
- 数据流转：服务端组件 + 客户端组件
- 模块划分：按功能模块组织代码
- 样式方案：Tailwind CSS + CSS Modules
- 状态管理：React 内置状态管理

### 部署相关
- 部署环境：Vercel（推荐）
- 部署流程：自动化部署
- 监控方案：Vercel Analytics（可选）
- 静态资源：自动优化和 CDN 分发

## 开发规范

### 目录使用规范
- app/: 所有页面和路由相关组件
- components/: 可复用组件，按功能分类
- public/: 静态资源，注意资源大小
- styles/: 全局样式和主题配置

### 组件开发规范
- 优先使用服务端组件
- 客户端组件使用 'use client' 指令
- 组件文件使用 .tsx 扩展名
- 保持组件职责单一

### 样式开发规范
- 优先使用 Tailwind CSS 类名
- 复杂样式使用 CSS Modules
- 避免内联样式
- 遵循响应式设计原则

## 注意事项
- 使用 App Router 的新特性进行开发
- 注意服务端组件和客户端组件的使用场景
- 确保字体和图片资源的优化配置
- 遵循 Next.js 的最佳实践
- 定期更新依赖包版本
- 保持代码风格一致性
- 编写必要的类型定义

