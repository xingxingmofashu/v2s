import { join } from "path"
import { defineRoute } from "../../utils/define"
import { V2RAYSHARE_CONFIG } from '../../utils/constants'

const { domain, clash } = V2RAYSHARE_CONFIG
export default defineRoute(
  "/api/subscribe/clash",
  {
    GET: async () => {
      const response = await fetch(join(domain, clash.pathname, clash.filename))
      return new Response(await response.text())
    }
  }
)