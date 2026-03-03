import { join } from "path"
import { V2RAYSHARE_CONFIG } from '../../utils/constants'
import { defineEventHandler } from "h3"

const { domain, v2ray } = V2RAYSHARE_CONFIG
export default defineEventHandler(async () => {
  const response = await fetch(join(domain, v2ray.pathname, v2ray.filename))
  return new Response(await response.text())
})