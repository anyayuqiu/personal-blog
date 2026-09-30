import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig,
} from "./types/config"
import type { FriendLink } from "./types/friend"
import type { I18nConfig } from "./types/i18n"

export const siteConfig: SiteConfig = {
    title: "熊宇的个人博客",
    subTitle: "项目与技术记录",
    rootSiteUrl: "https://blog.yuuuxion.xyz", // 上线前改为正式域名

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    toc: {
        enable: true,
        depth: 3 // Max depth of the table of contents, between 1 and 4
    },
    blogNavi: {
        enable: true // Whether to enable blog navigation in the blog footer
    },
    comments: {
        enable: false, // 展示型博客不启用评论后端
        platform: "default", // Comment platform, set "default" to use Momo-backend, also supports "twikoo"
        backendUrl: "https://api-momo.motues.top" // Backend URL for comments
    },
    theme: {
        AOS: true, // Whether to enable AOS (Animate On Scroll) for animations
        LQIP: true, // Whether to enable LQIP (Low-Quality Image Placeholder) for image placeholders
        PhotoSwipe: true, // Whether to enable PhotoSwipe for image viewer
        imageCollage: {
            enable: true, // Whether to automatically arrange consecutive images into a grid (collage)
            maxColumns: 4 // Max images per row in a collage (2 - 6); the actual number is chosen automatically
        },
        postCard: {
            imageMode: "top" // Cover image mode for article cards: "top" shows the image above the content; "background" uses the image as the card background, fading to transparent from right to left
        }
    },
    expressiveCode: {
        enable: true, // Whether to enable Expressive Code for code blocks; when false, code blocks fall back to plain text without highlighting (same in the CMS preview)
        theme: "one-dark-pro" // Shiki theme of code blocks, e.g. "one-dark-pro", "github-dark", "vitesse-dark"; one theme is used for both light and dark mode
    }
}

export const profileConfig: ProfileConfig = {
    avatar: "/favicon/favicon.ico",
    name: "站点主人", // 上线前填写你的姓名或昵称
    description: "项目实践与技术学习",
    indexPage: "https://www.yuuuxion.xyz", // 上线前改为正式域名
    startYear: 2026,
}

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0", // License name
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // License URL
};

export const i18nConfig: I18nConfig = {
    defaultLanguage: "zh-cn", // Default language of the site
    supportedLanguages: ["zh-cn", "en"], // List of supported languages
    translations: { // Translation content for each supported language
        "zh-cn": {
            Cover: {
                title: {
                home: "欢迎来到我的博客",
                    archive: "文章归档",
                    about: "关于",
                    friends: "友链",
                },
                subTitle: {
                    home: "项目实践与技术学习",
                    archive: "共 {count} 篇文章", // {count} will be replaced with the total number of articles
                    about: "个人经历与联系方式",
                    friends: "有趣的灵魂",
                }
            }
        },
        "en": {
            Cover: {
                title: {
                home: "Welcome to My Blog",
                    archive: "Archive",
                    about: "About",
                    friends: "Friends",
                },
                subTitle: {
                    home: "Projects and technical notes",
                    archive: "Total of {count} articles",
                    about: "A minimalist blog template",
                    friends: "Interesting Souls",
                }
            }
        }
    }
};

export const friendLinkConfig: FriendLink[] = []
