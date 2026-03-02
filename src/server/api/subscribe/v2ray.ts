import { join } from "path"
import { defineRoute } from "../../utils/define"
import { V2RAYSHARE_CONFIG } from '../../utils/config'

const { domain, v2ray } = V2RAYSHARE_CONFIG
export default defineRoute(
  "/api/subscribe/v2ray",
  {
    GET: async () => {
      const response = await fetch(join(domain, v2ray.pathname, v2ray.filename))
      return new Response(await response.text())
    }
  }
)