export type User = {
  data: null | UserData
  registerData: null | CreateUserData
}

export type UserData = {
  userId: string
  token: string
  avatar: string
  name: string
}

export type CreateUserData = {
  createUser: {
    _id: string
    _typename: string
  }
}