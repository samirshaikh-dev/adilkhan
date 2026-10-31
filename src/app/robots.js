import { SITE_URL } from "../data/seo";

const searchCrawlers = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
  "AdsBot-Google",
  "Mediapartners-Google",
  "bingbot",
  "BingPreview",
  "DuckDuckBot",
  "Slurp",
  "YandexBot",
  "Baiduspider",
  "Sogou web spider",
  "Exabot",
];

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "meta-externalagent",
  "Amazonbot",
  "YouBot",
  "DuckAssistBot",
  "MistralAI-User",
  "Bytespider",
  "DeepSeekBot",
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [...searchCrawlers, ...aiCrawlers],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
