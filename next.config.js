/** @type {import('next').NextConfig} */

function getBasePath() {
  var basePath = "";
  if (!process.env.BASE_PATH) {
    return "";
  }
  if (process.env.BASE_PATH.startsWith("/")) {
    basePath = process.env.BASE_PATH;
  } else {
    basePath = "/" + process.env.BASE_PATH;
  }
  return basePath;
}

module.exports = {
  pageExtensions: ["page.tsx"],
  assetPrefix: getBasePath(),
  basePath: getBasePath(),
  publicRuntimeConfig: {
    basePath: getBasePath(),
  },
};
