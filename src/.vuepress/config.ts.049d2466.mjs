// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  "/docs/",
  {
    text: "\u5B98\u65B9\u9891\u9053",
    icon: "people-group",
    link: "https://pd.qq.com/s/fylbrjbly/"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": [
    "",
    "/docs/",
    {
      text: "\u4F7F\u7528\u6587\u6863",
      icon: "laptop-code",
      prefix: "docs/\u4F7F\u7528\u6587\u6863",
      children: "structure"
    },
    {
      text: "\u767D\u540D\u5355\u6587\u6863",
      icon: "laptop-code",
      prefix: "docs/\u767D\u540D\u5355\u6587\u6863",
      children: "structure"
    },
    {
      text: "\u9891\u9053\u5B88\u5219",
      icon: "scale-balanced",
      prefix: "docs/\u9891\u9053\u5B88\u5219",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://tunefree.fun",
  author: {
    name: "\u662F\u9752\u65E8\u554A\u{1F334}",
    url: "https://sayqz.com/"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/blue-3d.png",
  repo: "https://github.com/GSQZ/TuneFree_Docs",
  docsDir: "src",
  // 导航栏
  navbar: navbar_default,
  // 侧边栏
  sidebar: sidebar_default,
  // 页脚
  footer: '<a href="https://beian.miit.gov.cn/">\u4EACICP\u59072022024294\u53F7</a>',
  displayFooter: true,
  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    }
  },
  // 多语言配置
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  // 在这里配置主题提供的插件
  plugins: {
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    components: {
      components: ["Badge", "VPCard"]
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
      // 在启用之前安装 chart.js
      // chart: true,
      // insert component easily
      // 在启用之前安装 echarts
      // echarts: true,
      // 在启用之前安装 flowchart.ts
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // 在启用之前安装 katex
      // katex: true,
      // 在启用之前安装 mathjax-full
      // mathjax: true,
      // 在启用之前安装 mermaid
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // 在启用之前安装 @vue/repl
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "TuneFree",
  description: "TuneFree\u5B98\u65B9\u7F51\u7AD9",
  theme: theme_default
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9wcm9qZWN0L3R1bmVmcmVlX3dlYi9UdW5lRnJlZV9Eb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcdHVuZWZyZWVfd2ViXFxcXFR1bmVGcmVlX0RvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvdHVuZWZyZWVfd2ViL1R1bmVGcmVlX0RvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJUdW5lRnJlZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUdW5lRnJlZVx1NUI5OFx1NjVCOVx1N0Y1MVx1N0FEOVwiLFxuXG4gIHRoZW1lLFxuXG4gIC8vIFx1NTQ4QyBQV0EgXHU0RTAwXHU4RDc3XHU1NDJGXHU3NTI4XG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9wcm9qZWN0L3R1bmVmcmVlX3dlYi9UdW5lRnJlZV9Eb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcdHVuZWZyZWVfd2ViXFxcXFR1bmVGcmVlX0RvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC90dW5lZnJlZV93ZWIvVHVuZUZyZWVfRG9jcy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly90dW5lZnJlZS5mdW5cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIlx1NjYyRlx1OTc1Mlx1NjVFOFx1NTU0QVx1RDgzQ1x1REYzNFwiLFxuICAgIHVybDogXCJodHRwczovL3NheXF6LmNvbS9cIixcbiAgfSxcblxuICBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXG5cbiAgbG9nbzogXCIvYmx1ZS0zZC5wbmdcIixcblxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9HU1FaL1R1bmVGcmVlX0RvY3NcIixcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlxuICBuYXZiYXIsXG5cbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXG4gIHNpZGViYXIsXG5cbiAgLy8gXHU5ODc1XHU4MTFBXG4gIGZvb3RlcjogJzxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiPlx1NEVBQ0lDUFx1NTkwNzIwMjIwMjQyOTRcdTUzRjc8L2E+JyxcbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAvLyBcdTUyQTBcdTVCQzZcdTkxNERcdTdGNkVcbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIFx1NTkxQVx1OEJFRFx1OEEwMFx1OTE0RFx1N0Y2RVxuICBtZXRhTG9jYWxlczoge1xuICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gIH0sXG5cbiAgLy8gXHU1OTgyXHU2NzlDXHU2MEYzXHU4OTgxXHU1QjlFXHU2NUY2XHU2N0U1XHU3NzBCXHU0RUZCXHU0RjU1XHU2NTM5XHU1M0Q4XHVGRjBDXHU1NDJGXHU3NTI4XHU1QjgzXHUzMDAyXHU2Q0U4OiBcdThGRDlcdTVCRjlcdTY2RjRcdTY1QjBcdTYwMjdcdTgwRkRcdTY3MDlcdTVGODhcdTU5MjdcdThEMUZcdTk3NjJcdTVGNzFcdTU0Q0RcbiAgLy8gaG90UmVsb2FkOiB0cnVlLFxuXG4gIC8vIFx1NTcyOFx1OEZEOVx1OTFDQ1x1OTE0RFx1N0Y2RVx1NEUzQlx1OTg5OFx1NjNEMFx1NEY5Qlx1NzY4NFx1NjNEMlx1NEVGNlxuICBwbHVnaW5zOiB7XG4gICAgLy8gXHU2Q0U4XHU2MTBGOiBcdTRFQzVcdTc1MjhcdTRFOEVcdTZENEJcdThCRDUhIFx1NEY2MFx1NUZDNVx1OTg3Qlx1ODFFQVx1ODg0Q1x1NzUxRlx1NjIxMFx1NUU3Nlx1NTcyOFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NEUyRFx1NEY3Rlx1NzUyOFx1ODFFQVx1NURGMVx1NzY4NFx1OEJDNFx1OEJCQVx1NjcwRFx1NTJBMVxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcblxuICAgIC8vIFx1NkI2NFx1NTkwNFx1NUYwMFx1NTQyRlx1NEU4Nlx1NUY4OFx1NTkxQVx1NTI5Rlx1ODBGRFx1NzUyOFx1NEU4RVx1NkYxNFx1NzkzQVx1RkYwQ1x1NEY2MFx1NUU5NFx1NEVDNVx1NEZERFx1NzU1OVx1NzUyOFx1NTIzMFx1NzY4NFx1NTI5Rlx1ODBGRFx1MzAwMlxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgcGxhbnR1bWw6IHRydWUsXG4gICAgICBzcG9pbGVyOiB0cnVlLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdGFza2xpc3Q6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuXG4gICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgY2hhcnQuanNcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgZWNoYXJ0c1xuICAgICAgLy8gZWNoYXJ0czogdHJ1ZSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGZsb3djaGFydC50c1xuICAgICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBnZm0gcmVxdWlyZXMgbWF0aGpheC1mdWxsIHRvIHByb3ZpZGUgdGV4IHN1cHBvcnRcbiAgICAgIC8vIGdmbTogdHJ1ZSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGthdGV4XG4gICAgICAvLyBrYXRleDogdHJ1ZSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IG1hdGhqYXgtZnVsbFxuICAgICAgLy8gbWF0aGpheDogdHJ1ZSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IG1lcm1haWRcbiAgICAgIC8vIG1lcm1haWQ6IHRydWUsXG5cbiAgICAgIC8vIHBsYXlncm91bmQ6IHtcbiAgICAgIC8vICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgcmV2ZWFsLmpzXG4gICAgICAvLyByZXZlYWxKczoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IEB2dWUvcmVwbFxuICAgICAgLy8gdnVlUGxheWdyb3VuZDogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBzYW5kcGFjay12dWUzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgICAgLy8gc2FuZHBhY2s6IHRydWUsXG4gICAgfSxcblxuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1OTcwMFx1ODk4MSBQV0FcdTMwMDJcdTVCODlcdTg4QzUgQHZ1ZXByZXNzL3BsdWdpbi1wd2EgXHU1RTc2XHU1M0Q2XHU2RDg4XHU0RTBCXHU2NUI5XHU2Q0U4XHU5MUNBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVJbWFnZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3Byb2plY3QvdHVuZWZyZWVfd2ViL1R1bmVGcmVlX0RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFx0dW5lZnJlZV93ZWJcXFxcVHVuZUZyZWVfRG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC90dW5lZnJlZV93ZWIvVHVuZUZyZWVfRG9jcy9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL1wiLFxuICBcIi9kb2NzL1wiLFxuICB7XG4gICAgdGV4dDogXCJcdTVCOThcdTY1QjlcdTk4OTFcdTkwNTNcIixcbiAgICBpY29uOiBcInBlb3BsZS1ncm91cFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wZC5xcS5jb20vcy9meWxicmpibHkvXCIsXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovcHJvamVjdC90dW5lZnJlZV93ZWIvVHVuZUZyZWVfRG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXHR1bmVmcmVlX3dlYlxcXFxUdW5lRnJlZV9Eb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC90dW5lZnJlZV93ZWIvVHVuZUZyZWVfRG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAgXCJcIixcbiAgICBcIi9kb2NzL1wiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU0RjdGXHU3NTI4XHU2NTg3XHU2ODYzXCIsXG4gICAgICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXG4gICAgICBwcmVmaXg6IFwiZG9jcy9cdTRGN0ZcdTc1MjhcdTY1ODdcdTY4NjNcIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTc2N0RcdTU0MERcdTUzNTVcdTY1ODdcdTY4NjNcIixcbiAgICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAgIHByZWZpeDogXCJkb2NzL1x1NzY3RFx1NTQwRFx1NTM1NVx1NjU4N1x1Njg2M1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1OTg5MVx1OTA1M1x1NUI4OFx1NTIxOVwiLFxuICAgICAgaWNvbjogXCJzY2FsZS1iYWxhbmNlZFwiLFxuICAgICAgcHJlZml4OiBcImRvY3MvXHU5ODkxXHU5MDUzXHU1Qjg4XHU1MjE5XCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFL1YsSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOzs7QUNWeVUsU0FBUyxlQUFlO0FBRWxXLElBQU8sa0JBQVEsUUFBUTtBQUFBLEVBQ3JCLEtBQUs7QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUZwQkQsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUVBLFlBQVk7QUFBQSxFQUVaLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQTtBQUFBLEVBR1Q7QUFBQTtBQUFBLEVBR0E7QUFBQTtBQUFBLEVBR0EsUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBO0FBQUEsRUFHZixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixzQkFBc0IsQ0FBQyxNQUFNO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLGFBQWE7QUFBQSxJQUNYLFVBQVU7QUFBQSxFQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxTQUFTO0FBQUE7QUFBQSxJQUdQLFlBQVk7QUFBQSxNQUNWLFlBQVksQ0FBQyxTQUFTLFFBQVE7QUFBQSxJQUNoQztBQUFBO0FBQUEsSUFHQSxXQUFXO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFNO0FBQ3JCLGdCQUFJLFFBQVE7QUFDVixxQkFBTztBQUFBLGdCQUNMLEtBQUs7QUFBQSxnQkFDTCxPQUFPLEVBQUUsTUFBTSxNQUFNO0FBQUEsZ0JBQ3JCLFNBQVM7QUFBQSxjQUNYO0FBQUEsVUFDSjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMERGO0FBQ0YsQ0FBQzs7O0FEbkxELElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBRWI7QUFBQTtBQUFBO0FBSUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
