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
# TuneFree Api

<br>

# 🪽 引言
::: danger 警告
该接口为TuneFree向广大第三方开发者开放的公益接口，严禁任何人利用该接口做出一些商业化行为，一经发现，接口将不再对外开放，如果你非要商业化，请阅读[`如何用TuneFree的接口赚钱`](https://cn.bing.com/search?q=%E6%88%B7%E5%8F%A3%E6%9C%AC%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%80%8E%E4%B9%88%E5%8A%9E)
:::
## 🎵 接口概述
本接口用于获取指定歌曲的音质URL。用户可以通过提供歌曲ID和音质级别来获取歌曲的直接下载链接。如果未指定音质级别，将默认使用标准音质。
## 🌐 接口地址
```
https://csm.sayqz.com/api/?type=apiSongUrlV1
```

## 📡 请求方式
```
GET
```

## 📋 请求参数

| 参数   | 类型   | 必填 | 说明                       |
| ------ | ------ | ---- | -------------------------- |
| id     | string | 是   | 歌曲的唯一标识符          |
| level  | string | 否   | 音质等级，默认为 `standard` |
| cookie | string | 是   | 用户的 cookie 信息        |

## 📊 返回数据格式

### ✅ 成功响应格式
若所有参数正常且用户为白名单用户，将返回如下格式的数据：
```json
{
  "data": [
    {
      "id": 2039194916,
      "url": "http://m701.music.126.net/20240802194514/731f43309e08c814d6cb4d633a71f22a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/26744497920/1fbb/0ae7/2a3a/23ea25e064efd360a88b0d510302b4ac.mp3",
      "br": 320000,
      "size": 8139885,
      "md5": "23ea25e064efd360a88b0d510302b4ac",
      "code": 200,
      "expi": 1200,
      "type": "mp3",
      "gain": -8.9453,
      "peak": 1,
      "fee": 8,
      "uf": null,
      "payed": 1,
      "flag": 2068484,
      "canExtend": false,
      "freeTrialInfo": null,
      "level": "exhigh",
      "encodeType": "mp3",
      "channelLayout": null,
      "freeTrialPrivilege": {
        "resConsumable": false,
        "userConsumable": false,
        "listenType": null,
        "cannotListenReason": null,
        "playReason": null,
        "freeLimitTagType": null
      },
      "freeTimeTrialPrivilege": {
        "resConsumable": false,
        "userConsumable": false,
        "type": 0,
        "remainTime": 0
      },
      "urlSource": 0,
      "rightSource": 0,
      "podcastCtrp": null,
      "effectTypes": null,
      "time": 203448,
      "message": null,
      "levelConfuse": null
    }
  ],
  "code": 200
}
```

### 🚫 非白名单用户响应格式
若用户为非白名单用户，将返回如下格式的数据：
```json
{
  "data": [
    {
      "id": "11451",
      "url": "https://cloud.wujiyan.cc/f/Db6sW/yytsv2.mp3",
      "br": 320000,
      "size": 8139885,
      "md5": "23ea25e064efd360a88b0d510302b4ac",
      "code": 200,
      "expi": 1200,
      "type": "mp3",
      "gain": -8.9453,
      "peak": 1,
      "fee": 8,
      "uf": null,
      "payed": 1,
      "flag": 2068484,
      "canExtend": false,
      "freeTrialInfo": null,
      "level": "exhigh",
      "encodeType": "mp3",
      "channelLayout": null,
      "freeTrialPrivilege": {
        "resConsumable": false,
        "userConsumable": false,
        "listenType": null,
        "cannotListenReason": null,
        "playReason": null
      },
      "freeTimeTrialPrivilege": {
        "resConsumable": false,
        "userConsumable": false,
        "type": 0,
        "remainTime": 0
      },
      "urlSource": 0,
      "rightSource": 0,
      "podcastCtrp": null,
      "effectTypes": null,
      "time": 203448,
      "message": null,
      "levelConfuse": null
    }
  ],
  "code": 200
}
```

## ❌ 错误响应格式
若请求参数缺失或用户状态异常，返回如下格式的数据：
```json
{
  "code": 0,
  "msg": "缺少参数{id}"
}
```
或
```json
{
  "msg": "获取歌曲信息失败。"
}
```

## 💡 使用示例
### 请求示例
```
GET https://csm.sayqz.com/api/?type=apiSongUrlV1&id=2039194916&level=high&cookie=your_cookie_here
```

### 响应示例
```json
{
  "data": [
    {
      "id": 2039194916,
      "url": "http://m701.music.126.net/...",
      ...
    }
  ],
  "code": 200
}
```

## ⚠️ 注意事项
- 确保 `cookie` 参数的有效性，以获取正确的用户状态。
- `id` 和 `level` 参数均需要正确传递，以确保接口正常工作。