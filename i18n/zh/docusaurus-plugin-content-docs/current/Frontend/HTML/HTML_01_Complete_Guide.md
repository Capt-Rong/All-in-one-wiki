# HTML 完全指南

## 目录

1. [HTML 简介](#html-简介)
2. [基本 HTML 结构](#基本-html-结构)
3. [文本格式化标签](#文本格式化标签)
4. [列表](#列表)
5. [链接和导航](#链接和导航)
6. [图片和媒体](#图片和媒体)
7. [表格](#表格)
8. [表单和输入](#表单和输入)
9. [语义化 HTML](#语义化-html)
10. [HTML5 特性](#html5-特性)
11. [最佳实践](#最佳实践)
12. [实战练习题](#实战练习题)

## HTML 简介

HTML（超文本标记语言）是用于创建网页的标准标记语言。它描述了网页的结构，由一系列告诉浏览器如何显示内容的元素组成。

### 什么是 HTML？

- HTML 代表超文本标记语言（HyperText Markup Language）
- 它是创建网页的标准标记语言
- HTML 元素是 HTML 页面的构建块
- HTML 元素由标签表示

## 基本 HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <!-- 内容放在这里 -->
  </body>
</html>
```

### 基本标签

- `<!DOCTYPE html>`: 声明文档类型
- `<html>`: 根元素
- `<head>`: 包含元数据
- `<body>`: 包含可见内容
- `<meta>`: 提供文档元数据
- `<title>`: 设置页面标题

## 文本格式化标签

### 标题

```html
<h1>主标题</h1>
<h2>副标题</h2>
<h3>章节标题</h3>
<h4>小节标题</h4>
<h5>次要标题</h5>
<h6>最小标题</h6>
```

### 文本样式

```html
<p>这是一个段落</p>
<strong>粗体文本</strong>
<em>斜体文本</em>
<mark>高亮文本</mark>
<small>小号文本</small>
<del>删除文本</del>
<ins>插入文本</ins>
<sub>下标</sub>
<sup>上标</sup>
```

## 列表

### 无序列表

```html
<ul>
  <li>项目一</li>
  <li>项目二</li>
  <li>项目三</li>
</ul>
```

### 有序列表

```html
<ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ol>
```

### 描述列表

```html
<dl>
  <dt>术语</dt>
  <dd>定义</dd>
</dl>
```

## 链接和导航

```html
<!-- 基本链接 -->
<a href="https://example.com">访问示例网站</a>

<!-- 新窗口打开链接 -->
<a href="https://example.com" target="_blank">在新标签页中打开</a>

<!-- 邮件链接 -->
<a href="mailto:email@example.com">发送邮件</a>

<!-- 电话链接 -->
<a href="tel:+8612345678900">拨打电话</a>
```

## 图片和媒体

```html
<!-- 基本图片 -->
<img src="image.jpg" alt="描述" />

<!-- 带尺寸的图片 -->
<img src="image.jpg" alt="描述" width="300" height="200" />

<!-- 视频 -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  您的浏览器不支持视频标签。
</video>

<!-- 音频 -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  您的浏览器不支持音频标签。
</audio>
```

## 表格 ⭐️

```html
<table>
  <thead>
    <tr>
      <th>表头一</th>
      <th>表头二</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据一</td>
      <td>数据二</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>页脚一</td>
      <td>页脚二</td>
    </tr>
  </tfoot>
</table>
```

## 表单和输入 ⭐️

```html
<form action="/submit" method="post">
  <!-- 文本输入 -->
  <input type="text" name="username" placeholder="用户名" />

  <!-- 密码输入 -->
  <input type="password" name="password" placeholder="密码" />

  <!-- 邮箱输入 -->
  <input type="email" name="email" placeholder="电子邮箱" />

  <!-- 数字输入 -->
  <input type="number" name="age" min="0" max="120" />

  <!-- 复选框 -->
  <input type="checkbox" name="subscribe" id="subscribe" />
  <label for="subscribe">订阅新闻通讯</label>

  <!-- 单选按钮 -->
  <input type="radio" name="gender" value="male" id="male" />
  <label for="male">男</label>
  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">女</label>

  <!-- 下拉选择 -->
  <select name="country">
    <option value="cn">中国</option>
    <option value="us">美国</option>
    <option value="jp">日本</option>
  </select>

  <!-- 文本区域 -->
  <textarea name="message" rows="4" cols="50"></textarea>

  <!-- 提交按钮 -->
  <button type="submit">提交</button>
</form>
```

## 语义化 HTML

```html
<header>
  <nav>
    <!-- 导航内容 -->
  </nav>
</header>

<main>
  <article>
    <section>
      <!-- 章节内容 -->
    </section>
  </article>

  <aside>
    <!-- 侧边栏内容 -->
  </aside>
</main>

<footer>
  <!-- 页脚内容 -->
</footer>
```

## HTML5 特性

- Canvas 绘图
- SVG 矢量图形
- 地理定位
- 本地存储
- Web Workers
- WebSocket
- 拖放功能
- 音视频支持

## 最佳实践

1. 使用语义化 HTML 元素
2. 始终为图片添加 alt 文本
3. 保持 HTML 结构清晰有序
4. 使用适当的缩进
5. 验证 HTML 代码
6. 确保可访问性
7. 优化性能
8. 适当使用注释

## 实战练习题

### 练习一：表单验证

创建一个注册表单，要求：

- 用户名（必填，最少3个字符）
- 电子邮箱（必填，有效邮箱格式）
- 密码（必填，最少8个字符）
- 确认密码（必须与密码匹配）
- 条款和条件复选框（必选）
- 提交按钮

### 练习二：响应式表格

创建一个响应式表格，要求：

- 在桌面端显示所有列
- 在移动端只显示重要列
- 具有交替行颜色
- 包含搜索过滤功能
- 具有可排序列

### 练习三：导航菜单

创建一个导航菜单，要求：

- 响应式设计（移动端显示汉堡菜单）
- 包含下拉子菜单
- 显示当前页面
- 具有可访问性
- 平滑过渡效果

### 练习四：图片画廊

创建一个图片画廊，要求：

- 网格布局显示图片
- 具有灯箱效果
- 响应式设计
- 懒加载功能
- 包含图片说明

### 练习五：联系表单

创建一个联系表单，要求：

- 客户端验证
- 实时验证反馈
- 防止重复提交
- 加载状态显示
- 成功/错误消息提示

### 解决方案和提示

对于每个练习，请考虑：

1. HTML 结构
2. 可访问性
3. 性能
4. 用户体验
5. 浏览器兼容性

记住：

- 使用语义化 HTML
- 包含适当的 ARIA 属性
- 在不同设备上测试
- 验证代码
- 遵循最佳实践
