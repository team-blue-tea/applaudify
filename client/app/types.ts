export type Appreciation = {
  senderName: string,
  receiverName: string,
  comment: string,
  imageId: number,
  tenorUrl: string,
}

export type User = {
  email?: string,
  name?: string,
  imageURL?: string,
}

export type ImageUrl = {
  url: string
}

export type UserList = {
  list: User[],
}

export type Contact = {
  name: string,
  avatarImage: string,
  role: string,
  gitUrl: string,
  linkedInUrl: string,
}