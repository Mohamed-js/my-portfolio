import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  env: {
    OPEN_API: "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",
  },
};

export default withContentlayer(nextConfig);
