---
title:Input
sidebarDepth:2
---

# Input 输入框

 <Input></Input>
 ```html
<g-input value="这是一个默认的输入框"></g-input>
<g-input value="这是一个只读的输入框" readonly></g-input>
<g-input value="这是一个被禁用的输入框" disabled></g-input>
<g-input error="这是一个可以报错的输入框"></g-input>
```
 
 <InputBind></InputBind>
 ```html
<g-input v-model="message"></g-input>
{{message}}

```