# HTML 可访问性指南

## 目录

1. [网页可访问性简介](#网页可访问性简介)
2. [语义化 HTML](#语义化-html)
3. [ARIA 属性](#aria-属性)
4. [键盘导航](#键盘导航)
5. [表单和输入](#表单和输入)
6. [图片和媒体](#图片和媒体)
7. [表格](#表格)
8. [动态内容](#动态内容)
9. [测试和验证](#测试和验证)
10. [最佳实践](#最佳实践)

## 网页可访问性简介

网页可访问性意味着网站、工具和技术需要被设计和开发，以便残障人士可以使用它们。这包括：

- 视觉障碍
- 听觉障碍
- 运动障碍
- 认知障碍

### 为什么可访问性很重要

- 许多国家的法律要求
- 为所有用户提供更好的体验
- 改善搜索引擎优化
- 社会责任
- 商业利益

## 语义化 HTML

### 基本结构

```html
<!-- 好的做法：使用语义化元素 -->
<header>
  <nav>
    <ul>
      <li><a href="#home">首页</a></li>
      <li><a href="#about">关于</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>文章标题</h1>
    <section>
      <h2>章节标题</h2>
      <p>内容放在这里...</p>
    </section>
  </article>
</main>

<footer>
  <p>版权所有 © 2024</p>
</footer>

<!-- 不好的做法：全部使用 div -->
<div class="header">
  <div class="nav">
    <div class="menu">
      <div class="item"><a href="#home">首页</a></div>
      <div class="item"><a href="#about">关于</a></div>
    </div>
  </div>
</div>
```

### 常用语义化元素

```html
<!-- 导航 -->
<nav>
  <ul>
    <li><a href="#home">首页</a></li>
    <li><a href="#about">关于</a></li>
  </ul>
</nav>

<!-- 主要内容 -->
<main>
  <article>
    <h1>文章标题</h1>
    <p>文章内容...</p>
  </article>
</main>

<!-- 侧边栏 -->
<aside>
  <h2>相关内容</h2>
  <ul>
    <li><a href="#link1">链接一</a></li>
    <li><a href="#link2">链接二</a></li>
  </ul>
</aside>

<!-- 页脚 -->
<footer>
  <p>版权信息</p>
</footer>
```

## ARIA 属性

### ARIA 角色和属性参考表

| 类别             | 属性/角色              | 描述             | 使用示例                       |
| ---------------- | ---------------------- | ---------------- | ------------------------------ |
| **地标角色**     | `role="banner"`        | 网站主头部       | `<header role="banner">`       |
|                  | `role="navigation"`    | 导航菜单         | `<nav role="navigation">`      |
|                  | `role="main"`          | 主要内容区域     | `<main role="main">`           |
|                  | `role="complementary"` | 补充内容         | `<aside role="complementary">` |
|                  | `role="contentinfo"`   | 页脚信息         | `<footer role="contentinfo">`  |
|                  | `role="search"`        | 搜索功能         | `<div role="search">`          |
| **组件角色**     | `role="button"`        | 可点击元素       | `<div role="button">`          |
|                  | `role="checkbox"`      | 复选框输入       | `<div role="checkbox">`        |
|                  | `role="radio"`         | 单选按钮         | `<div role="radio">`           |
|                  | `role="textbox"`       | 文本输入         | `<div role="textbox">`         |
|                  | `role="listbox"`       | 可选列表         | `<div role="listbox">`         |
|                  | `role="option"`        | 列表选项         | `<div role="option">`          |
| **实时区域角色** | `role="alert"`         | 重要消息         | `<div role="alert">`           |
|                  | `role="status"`        | 状态更新         | `<div role="status">`          |
|                  | `role="log"`           | 日志更新         | `<div role="log">`             |
|                  | `role="timer"`         | 倒计时器         | `<div role="timer">`           |
| **文档结构**     | `role="article"`       | 文章内容         | `<article role="article">`     |
|                  | `role="section"`       | 内容区块         | `<section role="section">`     |
|                  | `role="heading"`       | 标题元素         | `<div role="heading">`         |
| **ARIA 状态**    | `aria-expanded`        | 可展开元素状态   | `aria-expanded="true"`         |
|                  | `aria-hidden`          | 对屏幕阅读器隐藏 | `aria-hidden="true"`           |
|                  | `aria-invalid`         | 无效输入状态     | `aria-invalid="true"`          |
|                  | `aria-pressed`         | 按钮按下状态     | `aria-pressed="true"`          |
|                  | `aria-selected`        | 选中选项状态     | `aria-selected="true"`         |
| **ARIA 属性**    | `aria-label`           | 元素标签         | `aria-label="关闭"`            |
|                  | `aria-labelledby`      | 标签引用         | `aria-labelledby="标题"`       |
|                  | `aria-describedby`     | 描述引用         | `aria-describedby="描述"`      |
|                  | `aria-controls`        | 被控制元素       | `aria-controls="内容"`         |
|                  | `aria-live`            | 实时区域优先级   | `aria-live="polite"`           |

### ARIA 使用详细示例

#### 1. 复杂交互组件

```html
<!-- 自定义下拉菜单 -->
<div class="dropdown">
  <button aria-expanded="false" aria-controls="menu" aria-haspopup="true">
    选择选项
  </button>
  <ul id="menu" role="menu" aria-label="选项" aria-hidden="true">
    <li role="menuitem" tabindex="-1">选项一</li>
    <li role="menuitem" tabindex="-1">选项二</li>
  </ul>
</div>

<!-- 自定义标签页 -->
<div role="tablist" aria-label="产品信息">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">
    描述
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">
    规格
  </button>
</div>
<div id="panel1" role="tabpanel" aria-labelledby="tab1">产品描述内容</div>
<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>
  产品规格内容
</div>
```

#### 2. 表单验证和错误处理

```html
<!-- 带验证的表单 -->
<form>
  <div class="form-group">
    <label for="email">电子邮箱</label>
    <input
      type="email"
      id="email"
      aria-required="true"
      aria-invalid="false"
      aria-describedby="email-error email-hint"
    />
    <div id="email-hint">请输入有效的电子邮箱地址</div>
    <div id="email-error" role="alert" aria-live="polite"></div>
  </div>

  <div class="form-group">
    <label for="password">密码</label>
    <input
      type="password"
      id="password"
      aria-required="true"
      aria-invalid="false"
      aria-describedby="password-requirements"
    />
    <div id="password-requirements">
      密码必须至少8个字符，并包含：
      <ul>
        <li>一个大写字母</li>
        <li>一个数字</li>
        <li>一个特殊字符</li>
      </ul>
    </div>
  </div>
</form>
```

#### 3. 动态内容更新

```html
<!-- 进度指示器 -->
<div
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuetext="完成75%"
>
  <div class="progress-bar" style="width: 75%"></div>
</div>

<!-- 通知系统 -->
<div role="alert" aria-live="assertive">
  <h2>系统提醒</h2>
  <p>您的会话将在5分钟后过期</p>
</div>

<div role="status" aria-live="polite">
  <p>更改已成功保存</p>
</div>
```

#### 4. 复杂数据表格

```html
<!-- 可排序的数据表格 -->
<table role="grid" aria-label="员工目录">
  <thead>
    <tr>
      <th role="columnheader" aria-sort="ascending" aria-label="姓名，升序">
        姓名
      </th>
      <th role="columnheader" aria-sort="none" aria-label="部门，未排序">
        部门
      </th>
    </tr>
  </thead>
  <tbody>
    <tr role="row">
      <td role="gridcell">张三</td>
      <td role="gridcell">工程部</td>
    </tr>
  </tbody>
</table>
```

### ARIA 实现最佳实践

1. **优先使用原生 HTML 元素**

   - 优先使用语义化 HTML 元素而不是 ARIA 角色
   - 仅在原生元素无法提供所需功能时使用 ARIA

2. **ARIA 角色层级**

   - 维护正确的父子关系
   - 确保角色在适当的上下文中使用
   - 遵循 ARIA 角色继承规则

3. **状态管理**

   - 保持 ARIA 状态与视觉状态同步
   - 使用 JavaScript 动态更新状态
   - 处理所有用户交互的状态变化

4. **实时区域更新**

   - 使用适当的实时区域角色
   - 设置正确的优先级级别
   - 确保更新有意义且不会造成干扰

5. **测试和验证**
   - 使用多个屏幕阅读器测试
   - 验证键盘导航
   - 使用自动化工具检查 ARIA 实现

## 键盘导航

### 焦点管理

```html
<!-- 跳过链接 -->
<a href="#main-content" class="skip-link"> 跳转到主要内容 </a>

<!-- 可聚焦元素 -->
<button tabindex="0">点击我</button>
<div tabindex="0">可聚焦的 div</div>

<!-- 从 Tab 顺序中移除 -->
<button tabindex="-1">不可聚焦</button>

<!-- 焦点陷阱 -->
<div role="dialog" aria-modal="true">
  <button>关闭</button>
  <div tabindex="0">模态框内容</div>
</div>
```

### 交互元素

```html
<!-- 自定义按钮 -->
<div role="button" tabindex="0" onkeypress="handleKeyPress(event)">
  自定义按钮
</div>

<!-- 自定义复选框 -->
<div
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  onkeypress="toggleCheckbox(event)"
>
  自定义复选框
</div>

<!-- 自定义选择框 -->
<div role="listbox" tabindex="0" aria-label="选择一个选项">
  <div role="option" aria-selected="false">选项一</div>
  <div role="option" aria-selected="false">选项二</div>
</div>
```

## 表单和输入

### 可访问的表单结构

```html
<form>
  <!-- 标签关联 -->
  <div class="form-group">
    <label for="username">用户名：</label>
    <input type="text" id="username" name="username" required />
  </div>

  <!-- 错误消息 -->
  <div class="form-group">
    <label for="email">电子邮箱：</label>
    <input
      type="email"
      id="email"
      name="email"
      aria-invalid="true"
      aria-describedby="email-error"
      required
    />
    <div id="email-error" class="error-message">请输入有效的电子邮箱地址</div>
  </div>

  <!-- 字段集和图例 -->
  <fieldset>
    <legend>联系偏好</legend>
    <div>
      <input type="checkbox" id="email-pref" name="pref" value="email" />
      <label for="email-pref">电子邮件</label>
    </div>
    <div>
      <input type="checkbox" id="phone-pref" name="pref" value="phone" />
      <label for="phone-pref">电话</label>
    </div>
  </fieldset>
</form>
```

### 表单验证

```html
<!-- 客户端验证 -->
<input
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  aria-describedby="email-hint"
/>
<div id="email-hint">请输入有效的电子邮箱地址</div>

<!-- 自定义验证 -->
<input
  type="text"
  id="username"
  aria-invalid="false"
  aria-describedby="username-error"
  onblur="validateUsername(this)"
/>
<div id="username-error" class="error-message"></div>
```

## 图片和媒体

### 可访问的图片

```html
<!-- 装饰性图片 -->
<img src="decorative.jpg" alt="" role="presentation" />

<!-- 信息性图片 -->
<img src="chart.jpg" alt="显示月度销售数据的柱状图" />

<!-- 复杂图片 -->
<figure>
  <img src="complex-chart.jpg" alt="" aria-labelledby="chart-description" />
  <figcaption id="chart-description">复杂图表的详细描述</figcaption>
</figure>
```

### 可访问的媒体

```html
<!-- 带字幕的视频 -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="zh" label="中文" />
  您的浏览器不支持视频标签。
</video>

<!-- 带文字稿的音频 -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <track kind="descriptions" src="transcript.vtt" srclang="zh" label="中文" />
</audio>
<div id="transcript">
  <h2>文字稿</h2>
  <p>音频内容的完整文字稿...</p>
</div>
```

## 表格

### 可访问的表格

```html
<!-- 基本表格 -->
<table>
  <caption>
    月度销售数据
  </caption>
  <thead>
    <tr>
      <th scope="col">月份</th>
      <th scope="col">销售额</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">一月</th>
      <td>¥1000</td>
    </tr>
  </tbody>
</table>

<!-- 复杂表格 -->
<table>
  <caption>
    员工排班表
  </caption>
  <thead>
    <tr>
      <th scope="col">员工</th>
      <th scope="col" colspan="2">上午</th>
      <th scope="col" colspan="2">下午</th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col">开始</th>
      <th scope="col">结束</th>
      <th scope="col">开始</th>
      <th scope="col">结束</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">张三</th>
      <td>9:00</td>
      <td>12:00</td>
      <td>13:00</td>
      <td>17:00</td>
    </tr>
  </tbody>
</table>
```

## 动态内容

### 实时区域

```html
<!-- 警告实时区域 -->
<div role="alert" aria-live="assertive">这是一条重要消息</div>

<!-- 状态实时区域 -->
<div role="status" aria-live="polite">加载中...</div>

<!-- 日志实时区域 -->
<div role="log" aria-live="polite">
  <ul>
    <li>操作一完成</li>
    <li>操作二完成</li>
  </ul>
</div>
```

### 动态更新

```html
<!-- 进度指示器 -->
<div
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
>
  75%
</div>

<!-- 计时器 -->
<div role="timer" aria-live="polite" aria-label="倒计时">10:00</div>

<!-- 搜索结果 -->
<div role="search">
  <input type="search" aria-label="搜索" />
  <div role="status" aria-live="polite">找到 5 个结果</div>
</div>
```

## 测试和验证

### 工具和技术

1. **自动化测试**

   - WAVE
   - aXe
   - Lighthouse
   - HTML_CodeSniffer

2. **手动测试**

   - 键盘导航
   - 屏幕阅读器测试
   - 颜色对比度检查
   - 焦点管理

3. **用户测试**
   - 真实用户测试
   - 反馈收集
   - 可用性研究

## 最佳实践

1. **结构和语义**

   - 使用语义化 HTML 元素
   - 保持正确的标题层级
   - 包含地标和区域
   - 提供跳过链接

2. **导航**

   - 确保键盘可访问性
   - 维护焦点顺序
   - 提供焦点指示器
   - 包含跳过链接

3. **内容**

   - 编写清晰简洁的文本
   - 使用正确的标题级别
   - 提供文本替代方案
   - 确保足够的颜色对比度

4. **表单**

   - 使用正确的标签
   - 提供错误消息
   - 包含帮助文本
   - 确保键盘访问

5. **媒体**

   - 提供替代文本
   - 包含字幕
   - 添加文字稿
   - 确保媒体控件可访问

6. **动态内容**

   - 使用 ARIA 实时区域
   - 管理焦点
   - 提供状态更新
   - 优雅处理错误

7. **测试**

   - 使用屏幕阅读器测试
   - 验证键盘导航
   - 检查颜色对比度
   - 验证 ARIA 使用

8. **文档**
   - 记录可访问性特性
   - 提供使用指南
   - 包含测试程序
   - 维护合规记录
