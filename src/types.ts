export type Sizes = "sm" | "md" | "lg"

export type Cars = {
  cars: Car[]
}

export type Car = {
  id: string
  link: Link
  title: string
  brand: string
  vehicleType: VehicleType
}

export type Link = {
  href: string
  title: string
}

export enum VehicleType {
  Pb = "PB",
  Su = "SU",
}
