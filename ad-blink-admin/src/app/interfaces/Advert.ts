interface Board {
  age: string,
  gender: string,
  genre: string
}

export interface Advert {
  name: string,
  companyId: string,
  campaign: string,
  duration: number,
  description: string,
  files: File[],
  board: "Billboard" | "Lamp post" | "All",
  budget: number,
  target: Board
}