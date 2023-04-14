export interface Email {
  id: number
  from: string
  to: string
  email: string
  cc?: string[]
  subject: string
  body: string
  sentAt: string
  read: boolean
  archived: boolean
}

const wait = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(null), time)
  })
}

export async function getInbox() {
  const response = await fetch('http://localhost:3000/emails')
  const json = (await response.json()) as Email[]
  await wait(2000)
  return json.filter((email) => !email.archived)
}

export async function getArchive() {
  const response = await fetch('http://localhost:3000/emails')
  const json = (await response.json()) as Email[]
  await wait(2000)
  return json.filter((email) => email.archived)
}
