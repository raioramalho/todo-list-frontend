export const url = "http://localhost:3000/tasks"

export const api = async (method, body) => {
  const req = {
    headers: new Headers({ "Content-Type": "application/json" }),
    method: "GET",
    mode: "cors",
  }
  req.method = method
  if (method !== "GET") req.body = json(body)
  const data = await (await fetch(url, req)).json()
  return data
}

const tasks = await api("GET")
export default tasks
