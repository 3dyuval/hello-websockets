
const wb = new WebSocket(import.meta.env.VITE_BASE_SOCKET_URL!)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello World</h1>
`

