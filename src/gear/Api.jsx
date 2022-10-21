const api = {
  _stringify: (data) => {
    try {
      return JSON.stringify(data)
    } catch (err) {
      return { error: true }
    }
  },
  _config: async function ({ method, url, body, headers }) {
    const req = {
      headers: new Headers({ "Content-Type": "application/json" }),
      method: method,
      mode: "cors",
    }
    for (let item in headers) {
      req.headers.append(item, headers[item])
    }
    if (method !== "GET" && body) req.body = this._stringify(body)
    let data
    let data_temp
    try {
      data_temp = await fetch(url, req)
      data = await data_temp?.json()
    } catch (error) {
      console.dir(
        `[${new Date().toLocaleString("pt-br")}]: catch api: ${method} ${url}`
      )
      console.log(error)
      data = { error: true }
    } finally {
      return data
    }
  },

  get: function (url, headers) {
    return this._config({ method: "GET", url, headers })
  },
  post: function (url, body, headers) {
    return this._config({ method: "POST", url, body, headers })
  },
  put: function (url, body, headers) {
    return this._config({ method: "PUT", url, body, headers })
  },
  patch: function (url, body, headers) {
    return this._config({ method: "PATCH", url, body, headers })
  },
  delete: function (url, body, headers) {
    return this._config({ method: "DELETE", url, body, headers })
  },
}

export default api
