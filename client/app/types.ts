export type Appreciation = {
  senderName: string,
  receiverName: string,
  senderImageURL: string,
  receiverImageURL: string,
  comment: string,
  imageId: number,
  tenorUrl: string,
  createdAt?: string,
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