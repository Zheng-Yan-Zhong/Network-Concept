# Internet concept

## Table of Contents
* [HTTP](#HTTP)
  * [HTTP flow](#HTTP-Flow)
  * [HTTP Methods](#HTTP-Methods)
  * [HTTP Request](#HTTP-Request)
    * [HTTP Header](#HTTP-Header)
    * [HTTP Body](#HTTP-Body})
  * [HTTP Response](#HTTP-Response)
  * [HTTP General](#HTTP-General)
* [HTTPs](#HTTPs)
  * [SSL](#SSL)
  * [TLS](#TLS)
  * [Certbot](#)
* [Situation of Network](#Situation-of-Network)
  * [CORS]
  * [DDOS]
* [API](#API)
  * [Query]
  * [Parameter]
  * [Body]
* [Auth](#)
* [URI](#URI)
* [Domain](#Domain)
* [NAT](#)


# HTTP 
HTTP(HyperText Transfer Protocal)，也就是所謂的超文本傳輸協定。

而每台裝置必須確保溝通是有效的，於是超文本傳輸協議著重點就是電腦間所傳輸的資料是可以在每台裝置上完整呈現。

首先了解OSI七層模型中HTTP是在應用層、展示層、會話層之間
![](https://i.imgur.com/iPuQFjX.jpg)

---

## HTTP Flow

在Google瀏覽器中輸入想搜尋的比如天氣：
1. 我們會先請求網域
2. 接著DNS把該網域轉換成電腦之間認得的IP
3. 進入Server與其請求所對應的資料
4. Server進入資料庫撈取資料
5. Server取得資料後回傳到使用者的瀏覽器
6. 瀏覽器渲染資料成網頁中的資料格式**HTML**(HyperText Markup Language)
![](https://i.imgur.com/7GxBAh4.png)

---
## HTTP Methods

| Verb | description |
| -------- | -------- |
| GET     | 拿取資料     |
| POST     | 發送資料     |
| PUT     | 更新資料     |
| DELETE     | 刪除資料     |
| PATCH     | 覆蓋資料     |

---

## HTTP Status Code

[MDN HTTP Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

| Code | Explain | 
| -------- | -------- |
| 1xx     | 測試用     | 
| 2xx     | 請求、回應成功     | 
| 3xx     | 重導向訊息    |
| 4xx     | 客戶端錯誤     | 
| 5xx     | 伺服端錯誤     | 



## HTTP General
![](https://i.imgur.com/A2WhqPU.png)

Request URL中向 https://www.google.com/search 請求了一個q=(query=)，並且請求方法為**GET**，Server也回傳一個Status code 200，並且Remote Address就是該Server實體的IP位址，而:443(HTTPs port)

## HTTP Request

### HTTP Header



|  |  |  |
| -------- | -------- | -------- |
| Accept     | 接收回應的內容類型     | application/json、text/plain     |


### HTTP Body

---

## HTTP Response
並且Server會回傳HTML讓我的瀏覽器選染，而渲染的過程中還會執行相對應的JavaScript和Style sheet
![](https://i.imgur.com/P8ohFq2.png)

---

# HTTPs

## Certbot
[Certbot](https://certbot.eff.org/)

---

# Situation of Network

---

# API
Application Programming Interface(API)，泛指電腦透過傳遞媒介達到介接資料的方式。

由於前後端分離的概念，促使資料與畫面切割，也可以讓邏輯不用因為畫面需要更改而重寫。


這邊使用JavaScript的後端框架(Node.js)中的Express.js輕量化服務器套件來建立三個路由的API

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h3>Paradise</h3>");
});
app.get("/user/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

app.get("/search", (req, res) => {
  res.json({ query: req.query });
});

app.listen(3001, () => {
  console.log("running");
});

```

![](https://i.imgur.com/taQ5jp6.png)

### Parameter
會在網址後方使用`:`綁定定義參數

```javascript
app.get("/user/:id", (req, res) => {
  res.json({ userId: req.params.id });
});
```

![](https://i.imgur.com/52aVwTZ.png)

### Query
會在網址後方帶入`?`+`query=參數`
```javascript=
app.get("/search", (req, res) => {
  res.json({ query: req.query });
});
```
![](https://i.imgur.com/kOq2FA7.png)

### Body
利用HTTP中Request的body帶入我們所需要的JSON格式
```javascript
app.post("/register", (req, res) => {
  res.json({ body: req.body });
});
```

而Express.js還需要引入解構`application/json`格式的函式
```javascript
app.use(express.json());
```
![](https://i.imgur.com/CJSq9Co.png)


# URI 
URI是通稱我們所謂的網址列或是網域的一個大概念

![](https://i.imgur.com/xO15uAX.png)

# Domain
