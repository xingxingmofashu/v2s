import { join } from "path"
import { V2RAYSHARE_CONFIG } from '../../utils/constants'
import { defineEventHandler } from "h3"

const { domain, mihomo } = V2RAYSHARE_CONFIG
export default defineEventHandler(async () => {
  const response = await fetch(join(domain, mihomo.pathname, mihomo.filename))
  return new Response(await response.text())
})