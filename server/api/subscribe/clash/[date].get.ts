import { join } from "path"
import { defineEventHandler, getRouterParam } from "h3"
import { V2RayShare } from "../../../utils/config"

const { domain, clash } = V2RayShare
export default defineEventHandler(async (event) => {
  const date = getRouterParam(event, 'date')
  const { pathname, filename } = clash(date)
  const response = await fetch(join(domain(), pathname, filename))
  return new Response(await response.text())
})