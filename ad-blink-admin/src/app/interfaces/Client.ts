interface POC {
  name: string,
  email: string
}

export interface Client {
  name: string,
  companyId: string,
  poc: POC
}