import { join } from "path"
import { defineRoute } from "../../utils/define"
import { V2RAYSHARE_CONFIG } from '../../utils/constants'

const { domain, mihomo } = V2RAYSHARE_CONFIG
export default defineRoute(
  "/api/subscribe/mihomo",
  {
    GET: async () => {
      const response = await fetch(join(domain, mihomo.pathname, mihomo.filename))
      return new Response(await response.text())
    }
  }
)