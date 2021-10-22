export type UserId = string

export type BoxId = number

export type ItemId = number

export interface Box {
  id: BoxId
  title: string
  price: number
  image: string
  isLocal: boolean
  detail: string
  ownerId: string
  sales: number
  isManager: boolean
}

export interface BoxWithItems extends Box {
  items: Item[]
}

export interface User {
  email: string,
  id: UserId,
  nickname: string,
  point: number,
  isManager: boolean
}

export type Item = {
  id: ItemId
  productId: string
  seller: number
  title: string
  price: number
  image: string
  detail: string
}

export interface OpenResult {
  id: number,
  boxId: BoxId,
  userId: string,
  itemId: ItemId,
  openAt: string,
  user: User,
  item: Item
}