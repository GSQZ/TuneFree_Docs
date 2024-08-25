import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/docs/",
    {
      text: "使用文档",
      icon: "laptop-code",
      prefix: "docs/使用文档",
      children: "structure",
    },
    {
      text: "白名单文档",
      icon: "laptop-code",
      prefix: "docs/白名单文档",
      children: "structure",
    },
    {
      text: "频道守则",
      icon: "scale-balanced",
      prefix: "docs/频道守则",
      children: "structure",
    },
  ],
});
