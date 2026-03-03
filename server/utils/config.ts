import dayjs from "dayjs"

export class V2RayShare {

  static domain() {
    return "https://static.v2rayshare.net"
  }

  static v2ray(date?: string) {
    if (date) {
      if (!dayjs(date).isValid()) {
        throw new Error(`The "${date}" date is not valid.`)
      }
      return {
        pathname: `${dayjs(date).format("YYYY/MM")}`,
        filename: `${dayjs(date).format("YYYYMMDD")}.txt`,
      }
    }
    return {
      pathname: `${dayjs().format("YYYY/MM")}`,
      filename: `${dayjs().format("YYYYMMDD")}.txt`,
    }
  }

  static clash(date?: string) {
    if (date) {
      if (!dayjs(date).isValid()) {
        throw new Error(`The "${date}" date is not valid.`)
      }
      return {
        pathname: `${dayjs(date).format("YYYY/MM")}`,
        filename: `${dayjs(date).format("YYYYMMDD")}.yaml`,
      }
    }
    return {
      pathname: `${dayjs().format("YYYY/MM")}`,
      filename: `${dayjs().format("YYYYMMDD")}.yaml`
    }
  }

  static mihomo(date?: string) {
    if (date) {
      if (!dayjs(date).isValid()) {
        throw new Error(`The "${date}" date is not valid.`)
      }
      return {
        pathname: `${dayjs(date).format("YYYY/MM")}`,
        filename: `m${dayjs(date).format("YYYYMMDD")}.yaml`,
      }
    }
    return {
      pathname: `${dayjs().format("YYYY/MM")}`,
      filename: `m${dayjs().format("YYYYMMDD")}.yaml`,
    }
  }
}