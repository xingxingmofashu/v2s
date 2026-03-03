import { join } from "path"
import { V2RAYSHARE_CONFIG } from '../../utils/constants'
import { defineEventHandler } from "h3"

const { domain, clash } = V2RAYSHARE_CONFIG
export default defineEventHandler(async () => {
  const response = await fetch(join(domain, clash.pathname, clash.filename))
  return new Response(await response.text())
})