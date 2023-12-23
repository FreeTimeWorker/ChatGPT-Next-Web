/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "智能机器人",
  description:
    "智能聊天,聊天机器人,AI聊天机器人,聊天机器人开发,聊天机器人技术,聊天机器人平台,聊天机器人解决方案,聊天机器人应用,聊天机器人API,聊天机器人设计,自然语言处理（NLP）,语音识别,文本生成,人工智能助手,虚拟助手,AI对话系统,聊天机器人算法,聊天机器人优化,聊天机器人交互设计,聊天机器人用户体验,聊天机器人语言模型,聊天机器人数据集,聊天机器人训练,聊天机器人评估,聊天机器人部署,聊天机器人性能,聊天机器人安全性,聊天机器人监控,聊天机器人分析,聊天机器人营销,聊天机器人客户支持,聊天机器人销售,聊天机器人咨询,聊天机器人行业应用,聊天机器人案例研究,聊天机器人新闻",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "智能机器人",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
