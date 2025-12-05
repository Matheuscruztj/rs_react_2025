export const fetcher = (url: string) => fetch(`http://localhost:3333${url}`).then(res => res.json())

export const api = (url: string, options: RequestInit = {}) => fetch(`http://localhost:3333${url}`, options).then(res => res.json())
