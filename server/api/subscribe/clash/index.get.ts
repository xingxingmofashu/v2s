import { join } from "path"
import { defineEventHandler } from "h3"
import { V2RayShare } from "../../../utils/config"

const { domain, clash } = V2RayShare
export default defineEventHandler(async () => {
  const { pathname, filename } = clash()
  const response = await fetch(join(domain(), pathname, filename))
  return new Response(await response.text())
})