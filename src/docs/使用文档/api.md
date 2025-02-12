---
title: TuneFree Api
icon: network-wired
order: 2
category:
  - 使用教程
tag:
  - 教程
  - 白名单
  - api
---

# TuneFree API 文档 🚀

## 基础信息 📌

- 基础URL: `https://auth.sayqz.com/`
- 请求方式: 全部使用 GET
- 返回格式: JSON

::: tip 返回格式说明
所有接口返回格式统一为：
```json
{
    "code": 200,          // 状态码：200成功，其他失败
    "message": "success", // 状态信息
    "data": null         // 返回数据，可能是对象、数组或null
}
```
:::

## 接口列表 📋

### 1. 用户注册 👤

**请求地址：** `https://auth.sayqz.com/?path=register`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| cookie | string | 是 | 网易云音乐Cookie |
| email | string | 是 | QQ邮箱（格式：数字@qq.com） |
| code | string | 是 | 邮箱验证码 |

**调用示例：**

::: code-tabs
@tab Python
```python
import requests

def register_user(cookie, email, code):
    url = "https://auth.sayqz.com/"
    params = {
        "path": "register",
        "cookie": cookie,
        "email": email,
        "code": code
    }
    response = requests.get(url, params=params)
    return response.json()
```

@tab JavaScript
```javascript
async function registerUser(cookie, email, code) {
    const url = new URL('https://auth.sayqz.com/');
    url.searchParams.append('path', 'register');
    url.searchParams.append('cookie', cookie);
    url.searchParams.append('email', email);
    url.searchParams.append('code', code);
    
    const response = await fetch(url.toString());
    return await response.json();
}
```

@tab Java
```java
public class TuneFreeApi {
    public static JSONObject registerUser(String cookie, String email, String code) {
        String url = String.format(
            "https://auth.sayqz.com/?path=register&cookie=%s&email=%s&code=%s",
            URLEncoder.encode(cookie),
            URLEncoder.encode(email),
            URLEncoder.encode(code)
        );
        
        return HttpClient.newHttpClient()
            .sendAsync(HttpRequest.newBuilder(URI.create(url))
                .GET()
                .build(),
                HttpResponse.BodyHandlers.ofString())
            .thenApply(HttpResponse::body)
            .thenApply(JSONObject::new)
            .join();
    }
}
```
:::

**返回示例：**
```json
{
    "code": 200,
    "message": "注册成功",
    "data": null
}
```

### 2. 发送验证码 📨

**请求地址：** `https://auth.sayqz.com/?path=send_code`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| email | string | 是 | QQ邮箱 |

### 3. 用户登录 🔐

**请求地址：** `https://auth.sayqz.com/?path=login`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| cookie | string | 是 | 网易云音乐Cookie |

**返回示例：**
```json
{
    "code": 200,
    "message": "登录成功",
    "data": {
        "netease_uid": "123456789",
        "email": "12345@qq.com",
        "is_whitelist": 1,
        "last_login_time": "2024-02-08 12:34:56",
        "cookie_update_time": "2024-02-08 12:34:56"
    }
}
```

### 4. 获取授权码 🔑

**请求地址：** `https://auth.sayqz.com/?path=get_auth_code`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| cookie | string | 是 | 网易云音乐Cookie |

### 5. 获取用户信息 👥

**请求地址：** `https://auth.sayqz.com/?path=info`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| code | string | 是 | 授权码 |

### 6. 激活白名单 ⭐

**请求地址：** `https://auth.sayqz.com/?path=activate`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| cookie | string | 是 | 网易云音乐Cookie |
| code | string | 是 | 激活码 |

### 7. 获取音乐URL 🎵

**请求地址：** `https://auth.sayqz.com/?path=song/url`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| cookie | string | 否 | 网易云音乐Cookie |
| id | string | 是 | 歌曲ID |
| level | string | 否 | 音质等级，可选值：standard/higher/exhigh/lossless/hires/jyeffect/sky/dolby/jymaster，默认：exhigh |

::: warning 特别说明
1. 未登录用户或未激活白名单用户将返回默认音频
2. 音乐URL获取失败时会尝试使用备用接口
3. 如果所有接口都失败，将返回提示音频
:::

### 8. 获取听歌记录 📊

**请求地址：** `https://auth.sayqz.com/?path=listen/records`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| cookie | string | 是 | 网易云音乐Cookie |
| page | int | 否 | 页码，默认1 |
| page_size | int | 否 | 每页数量，默认20，最大100 |

### 9. 获取应用信息 ℹ️

**请求地址：** `https://auth.sayqz.com/?path=app/info`

**参数说明：**
| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| platform | string | 否 | 平台类型：android/pc，默认：android |

## 通用错误码 ⚠️

| 错误码 | 说明 |
|-------|------|
| 404 | 接口不存在 |
| 500 | 服务器内部错误 |

## 注意事项 💡

1. 所有时间格式均为：`YYYY-MM-DD HH:mm:ss`
2. 所有URL都需要进行URL编码
3. Cookie中的特殊字符需要进行URL编码
4. 返回的错误信息可能会随具体情况有所变化

::: tip 开发建议
- 建议在开发时做好错误处理
- 接口调用建议加入重试机制
- 注意保护用户的Cookie信息
:::