interface MapType {
  [key: string]: string
}

export const HOUSE_TYPES: MapType = {
  RESIDENCE: "Residência",
  POOLHOUSE: "Imóvel com piscina",
  COMERCIAL: "Comercial",
}

export const USER_ROLES: MapType = {
  RESIDENT: "Residente",
  ADMIN: "Administrador",
}
