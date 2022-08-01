export interface Product {
  name: string,
  amount: string,
}

export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Login {
  username: string,
  password: string,
}

export interface Token {
  id: number,
  username: string,
}