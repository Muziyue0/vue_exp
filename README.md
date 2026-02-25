# Vue Shop Project - 全栈电商系统

## 项目简介
本项目是一个基于 Vue 3 全家桶和 Node.js (ThinkJS) 开发的前后端分离电商系统。项目模拟了真实的电商业务场景，包含面向用户的移动端商城、面向管理员的后台管理系统以及提供数据支持的后端 API 服务。

## 项目结构与功能

### 1. 移动端商城 (my-shop)
* **类型**: H5 前端应用
* **功能**: 用户注册登录、商品浏览、购物车管理、个人中心等。
* **核心技术**: Vue 3, Vite, Vant UI, Pinia, Axios。

### 2. 后台管理系统 (shop-system)
* **类型**: PC 端管理后台
* **功能**: 商品管理、分类管理、订单查看、销售数据可视化看板等。
* **核心技术**: Vue 3, Vite, Element Plus, ECharts, Tinymce, Pinia。

### 3. 后端 API 服务 (shop-backend)
* **类型**: Node.js 后端服务
* **功能**: 提供 RESTful API 接口、数据库交互、JWT 鉴权、静态资源托管。
* **核心技术**: Node.js, ThinkJS 3.0, MySQL, JWT。

## 技术栈详细说明

### 前端通用技术
* **框架**: Vue 3 (Composition API)
* **构建工具**: Vite
* **状态管理**: Pinia (配合持久化插件 pinia-plugin-persist)
* **路由**: Vue Router 4
* **HTTP 请求**: Axios

### 后端技术
* **Web 框架**: ThinkJS (基于 Koa)
* **数据库**: MySQL 5.7+
* **ORM**: think-model-mysql
* **认证方案**: JWT (JSON Web Token)

## 快速开始指南

### 环境准备
* Node.js (建议 v16.0 或更高版本)
* MySQL 数据库 (建议 v5.7 或 v8.0)

### 步骤 1: 数据库配置
1.  创建一个名为 `vueshop` 的 MySQL 数据库。
2.  将 `shop-backend/data.sql` 文件导入到该数据库中。
3.  修改后端配置文件 `shop-backend/src/config/adapter.js`：
    * 找到 `exports.model` 配置项。
    * 修改 `mysql` 对象中的 `host`, `database`, `user`, `password` 为您的本地数据库配置。

### 步骤 2: 启动后端服务
在终端中进入 `shop-backend` 目录：
```bash
cd shop-backend
npm install
npm start
服务默认运行在 https://www.google.com/search?q=http://127.0.0.1:8360

步骤 3: 启动移动端商城
在终端中进入 my-shop 目录：

Bash
cd my-shop
npm install
npm run dev
访问地址通常为 http://localhost:5173

步骤 4: 启动后台管理系统
在终端中进入 shop-system 目录：

Bash
cd shop-system
npm install
npm run dev
访问地址通常为 http://localhost:5174 (若端口被占用会自动递增)

核心功能模块
移动端 (Client)
首页: 轮播图展示、新品推荐列表。

分类: 商品分类导航与检索。

购物车: 商品添加、数量调整、选中结算。

用户: 登录注册、个人信息管理。

管理端 (Admin)
数据看板: 基于 ECharts 的销售数据图表。

商品管理: 商品增删改查、富文本详情编辑。

分类管理: 商品类目维护。

设置: 管理员账户与系统设置。

注意事项
