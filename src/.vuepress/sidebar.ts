import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/docs/",
    {
      text: "使用文档",
      icon: "laptop-code",
      prefix: "docs/s",
      children: "structure",
    },
  ],
});
