import {defineUserConfig} from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    title: "Miooyuki Documents",
    description: "Just playing around",
    theme: recoTheme({
        style: "@vuepress-reco/style-default",
        logo: "/logo.png",
        author: "Miooyuki",
        authorAvatar: "/head.png",
        docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
        docsBranch: "main",
        docsDir: "example",
        lastUpdatedText: "",
        // series 为原 sidebar
        series: {
            "/docs/theme-reco/": [
                {
                    text: "module one",
                    children: ["home", "theme"],
                },
                {
                    text: "module two",
                    children: ["api", "plugin"],
                },
            ],
            "/docs/fabric/": [
                {
                    text: "安装",
                    children: ["/docs/fabric/install/1"]
                },
                {
                    text: "基础",
                    children: [
                        "/docs/fabric/base/1",
                        "/docs/fabric/base/2",
                        "/docs/fabric/base/3",
                        "/docs/fabric/base/4",
                        "/docs/fabric/base/5",
                        "/docs/fabric/base/6",
                        "/docs/fabric/base/7",
                    ]
                }
            ]
        },
        navbar: [
            {text: "主页", icon: "Home", link: "/"},
            {text: "分类", icon: "Category", link: "/categories/reco/1/"},
            {text: "标签", icon: "Tag", link: "/tags/tag1/1/"},
        ],
    }),
    // debug: true,
});
