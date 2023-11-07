import {defineUserConfig} from "vuepress";
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    title: "Miooyuki Documents",
    description: "Just playing around",
    plugins: [
        mdEnhancePlugin({
            katex: true
        }),
    ],
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
            "/docs/fabric/": [
                {
                    text: "安装",
                    children: ["/docs/fabric/install/setup"]
                },
                {
                    text: "基础",
                    children: [
                        "/docs/fabric/base/primer",
                        "/docs/fabric/base/introduction",
                        "/docs/fabric/base/reading_mc_code",
                        "/docs/fabric/base/terms",
                        "/docs/fabric/base/side",
                        "/docs/fabric/base/registry",
                        "/docs/fabric/base/registry_types",
                        "/docs/fabric/base/libraries",
                        "/docs/fabric/base/applychanges",
                        "/docs/fabric/base/lang",
                        "/docs/fabric/base/mappings",
                    ]
                },
                {
                    text: "物品",
                    children: ["/docs/fabric/item/items_docs"]
                },
            ],
            "/docs/shiro/": [
                {
                    text: "Apache Shiro",
                    children: [
                        "menu",
                        "10mtutorial"
                    ]
                }
            ]
        },
        navbar: [
            {text: "主页", icon: "Home", link: "/"},
            {text: "分类", icon: "Category", link: "/categories/Unity/1/"},
            {text: "标签", icon: "Tag", link: "/tags/tag1/1/"},
        ],
    }),
    // debug: true,
});
