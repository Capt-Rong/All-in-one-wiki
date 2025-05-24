# HTML 表单：完全指南

## 目录

1. [HTML 表单简介](#html-表单简介)
2. [表单结构](#表单结构)
3. [输入类型](#输入类型)
4. [表单验证](#表单验证)
5. [表单样式](#表单样式)
6. [高级表单特性](#高级表单特性)
7. [最佳实践](#最佳实践)
8. [实战示例](#实战示例)

## HTML 表单简介

HTML 表单是网页中用于收集用户输入的重要元素。它们支持从简单的文本输入到复杂的文件上传等各种数据收集方式。

### 基本表单结构

```html
<form action="/submit" method="post">
  <!-- 表单元素放在这里 -->
</form>
```

### 表单属性

- `action`: 指定表单数据提交的位置
- `method`: 定义数据提交方式（GET 或 POST）
- `enctype`: 指定表单数据的编码方式
- `target`: 定义响应显示的位置
- `autocomplete`: 启用/禁用浏览器自动完成
- `novalidate`: 禁用表单验证

## 表单结构

### 表单元素

```html
<form action="/submit" method="post">
  <!-- 文本输入 -->
  <div class="form-group">
    <label for="username">用户名：</label>
    <input type="text" id="username" name="username" required />
  </div>

  <!-- 密码输入 -->
  <div class="form-group">
    <label for="password">密码：</label>
    <input type="password" id="password" name="password" required />
  </div>

  <!-- 提交按钮 -->
  <button type="submit">提交</button>
</form>
```

### 表单组织

- 使用 `<fieldset>` 对相关元素进行分组
- 使用 `<legend>` 作为分组标题
- 使用 `<label>` 提高可访问性
- 使用适当的输入类型
- 包含有帮助的占位符文本

## 输入类型

### 文本类输入

```html
<!-- 文本输入 -->
<input type="text" name="text" />

<!-- 密码输入 -->
<input type="password" name="password" />

<!-- 邮箱输入 -->
<input type="email" name="email" />

<!-- 数字输入 -->
<input type="number" name="age" min="0" max="120" />

<!-- 电话输入 -->
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

<!-- URL输入 -->
<input type="url" name="website" />

<!-- 搜索输入 -->
<input type="search" name="search" />
```

### 选择类输入

```html
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
  <option value="">选择国家</option>
  <option value="cn">中国</option>
  <option value="us">美国</option>
  <option value="jp">日本</option>
</select>

<!-- 多选下拉 -->
<select name="skills" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
```

### 文件和日期输入

```html
<!-- 文件上传 -->
<input type="file" name="document" accept=".pdf,.doc,.docx" />

<!-- 日期输入 -->
<input type="date" name="birthdate" />

<!-- 时间输入 -->
<input type="time" name="appointment" />

<!-- 日期时间输入 -->
<input type="datetime-local" name="meeting" />

<!-- 颜色选择器 -->
<input type="color" name="favorite-color" />

<!-- 范围滑块 -->
<input type="range" name="rating" min="1" max="5" />
```

## 表单验证

### HTML5 验证

```html
<!-- 必填字段 -->
<input type="text" name="username" required />

<!-- 模式匹配 -->
<input type="text" name="zipcode" pattern="[0-9]{5}" />

<!-- 长度限制 -->
<input type="text" name="username" minlength="3" maxlength="20" />

<!-- 数值范围 -->
<input type="number" name="age" min="18" max="100" />

<!-- 自定义验证消息 -->
<input
  type="email"
  name="email"
  oninvalid="this.setCustomValidity('请输入有效的电子邮箱地址')"
  oninput="this.setCustomValidity('')"
/>
```

### 自定义验证

```javascript
// JavaScript 验证示例
function validateForm() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  if (password.value !== confirmPassword.value) {
    alert("密码不匹配！");
    return false;
  }
  return true;
}
```

## 表单样式

### 基础 CSS

```css
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

## 高级表单特性

### 表单数据 API

```javascript
// 获取表单数据
const form = document.querySelector("form");
const formData = new FormData(form);

// 访问表单数据
for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

// 通过 AJAX 提交表单数据
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch("/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("错误：", error);
  }
});
```

### 文件上传预览

```html
<input type="file" id="image" accept="image/*" onchange="previewImage(event)" />

<script>
  function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const preview = document.createElement("img");
      preview.src = e.target.result;
      document.body.appendChild(preview);
    };

    reader.readAsDataURL(file);
  }
</script>
```

## 最佳实践

1. **可访问性**

   - 始终使用 `<label>` 元素
   - 包含适当的 ARIA 属性
   - 确保键盘导航
   - 提供清晰的错误消息

2. **安全性**

   - 在客户端和服务器端都进行验证
   - 使用 HTTPS 提交表单
   - 实现 CSRF 保护
   - 净化用户输入

3. **用户体验**

   - 提供清晰的说明
   - 显示验证反馈
   - 使用适当的输入类型
   - 实现渐进增强

4. **性能**
   - 最小化表单字段
   - 使用适当的输入类型
   - 实现懒加载
   - 优化文件上传

## 实战示例

### 注册表单

```html
<form action="/register" method="post" class="registration-form">
  <fieldset>
    <legend>个人信息</legend>

    <div class="form-group">
      <label for="fullname">姓名：</label>
      <input type="text" id="fullname" name="fullname" required />
    </div>

    <div class="form-group">
      <label for="email">电子邮箱：</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div class="form-group">
      <label for="password">密码：</label>
      <input
        type="password"
        id="password"
        name="password"
        minlength="8"
        required
      />
    </div>

    <div class="form-group">
      <label for="confirm-password">确认密码：</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        required
      />
    </div>
  </fieldset>

  <fieldset>
    <legend>偏好设置</legend>

    <div class="form-group">
      <label>订阅新闻通讯：</label>
      <input type="checkbox" id="newsletter" name="newsletter" />
      <label for="newsletter">订阅新闻通讯</label>
    </div>

    <div class="form-group">
      <label for="frequency">更新频率：</label>
      <select id="frequency" name="frequency">
        <option value="daily">每日</option>
        <option value="weekly">每周</option>
        <option value="monthly">每月</option>
      </select>
    </div>
  </fieldset>

  <button type="submit">注册</button>
</form>
```

### 联系表单

```html
<form action="/contact" method="post" class="contact-form">
  <div class="form-group">
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name" required />
  </div>

  <div class="form-group">
    <label for="email">电子邮箱：</label>
    <input type="email" id="email" name="email" required />
  </div>

  <div class="form-group">
    <label for="subject">主题：</label>
    <input type="text" id="subject" name="subject" required />
  </div>

  <div class="form-group">
    <label for="message">消息：</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>

  <div class="form-group">
    <label for="attachment">附件：</label>
    <input
      type="file"
      id="attachment"
      name="attachment"
      accept=".pdf,.doc,.docx"
    />
  </div>

  <button type="submit">发送消息</button>
</form>
```

### 搜索表单

```html
<form action="/search" method="get" class="search-form">
  <div class="form-group">
    <input type="search" name="q" placeholder="搜索..." required />
    <button type="submit">搜索</button>
  </div>

  <div class="form-group">
    <label>搜索范围：</label>
    <input
      type="checkbox"
      id="title"
      name="search_in[]"
      value="title"
      checked
    />
    <label for="title">标题</label>

    <input
      type="checkbox"
      id="content"
      name="search_in[]"
      value="content"
      checked
    />
    <label for="content">内容</label>

    <input type="checkbox" id="tags" name="search_in[]" value="tags" />
    <label for="tags">标签</label>
  </div>
</form>
```
