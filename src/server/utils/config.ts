const now = new Date()

export const V2RAYSHARE_CONFIG = {
  domain: "https://static.v2rayshare.net",
  v2ray: {
    pathname: `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}`,
    filename: `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDay().toString().padStart(2, '0')}.txt`,
  },
  clash: {
    pathname: `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}`,
    filename: `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDay().toString().padStart(2, '0')}.yaml`,
  },
  mihomo: {
    pathname: `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}`,
    filename: `m${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDay().toString().padStart(2, '0')}.yaml`,
  }
}