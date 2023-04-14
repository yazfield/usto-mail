export interface Email {
  id: number
  from: string // email
  to: string // email
  cc: string[] // emails
  subject: string
  body: string // html
  sentAt: string // dd-mm-yyyy
  read: boolean
  archived: boolean
}

const wait = (time: number): Promise<null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(null), time)
  })
}

export const getEmail = async (id: number): Promise<Email[]> => {
  const response = await fetch('http://localhost:3000/emails')
  const json = (await response.json()) as Email[]
  return json.find((email) => email.id === id)
}

export const getInbox = async (): Promise<Email[]> => {
  const response = await fetch('http://localhost:3000/emails')
  const json = (await response.json()) as Email[]
  await wait(2000)
  return json.filter((email) => !email.archived)
}

export const getArchive = async (): Promise<Email[]> => {
  const response = await fetch('http://localhost:3000/emails')
  const json = (await response.json()) as Email[]
  await wait(2000)
  return json.filter((email) => email.archived)
}
