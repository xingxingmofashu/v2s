import { join } from "path"
import { defineEventHandler } from "h3"
import { V2RayShare } from "../../../utils/config"

const { domain, v2ray } = V2RayShare
export default defineEventHandler(async () => {
  const { pathname, filename } = v2ray()
  const response = await fetch(join(domain(), pathname, filename))
  return new Response(await response.text())
})