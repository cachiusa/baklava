import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import sidebar from "../../docs/_sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
    const prod = mode === "production";
    return {
        title: "",
        description: "",

        srcDir: prod ? "docs" : "../docs",
        outDir: "../.build/docs",
        cleanUrls: true,

        markdown: {
            config(md) {
                md.use(tabsMarkdownPlugin);
            },
        },

        vite: {
            resolve: {
                preserveSymlinks: true,
            },
        },

        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            logo: {
                light: "",
                dark: "",
            },
            title: '',

            nav: [{ text: "Home", link: "/" }],

            search: {
                provider: "local",
            },

            editLink: {
                pattern: ''
            },
            lastUpdated: true,

            sidebar: sidebar,

            externalLinkIcon: true,

            socialLinks: [
                { icon: "github", link: "" },
            ],
        }
    };
});