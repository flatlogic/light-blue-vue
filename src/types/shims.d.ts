// Skycons module (no official types)
declare module 'skycons' {
  interface SkyconInstance {
    add: (el: HTMLCanvasElement, icon: unknown) => void
    set: (el: HTMLCanvasElement, icon: unknown) => void
    play: () => void
    pause: () => void
  }

  interface SkyconConstructor {
    new (options?: { color?: string }): SkyconInstance
    [key: string]: unknown
  }

  function Skycons(window: Window | Record<string, never>): SkyconConstructor
  export = Skycons
}

// Mock module declarations (for .js mock files)
declare module '*/mock' {
  const mock: any
  export default mock
  export const bigStat: any
  export const mainChart: any
  export const tableData: any
  export const revenueChart: any
  export const taskContainerData: any
  export const performanceChart: any
  export const registrations: any
  export const users: any
  export const messages: any
  export const products: any
  export const data: any
  export const chartData: any
  export const liveChart: any
  export const liveChartInterval: any
}

declare module '*/mock.js' {
  const mock: any
  export default mock
  export const bigStat: any
  export const mainChart: any
  export const tableData: any
  export const revenueChart: any
  export const taskContainerData: any
  export const performanceChart: any
  export const registrations: any
  export const users: any
  export const messages: any
  export const products: any
  export const data: any
  export const chartData: any
  export const liveChart: any
  export const liveChartInterval: any
}

declare module '*/data' {
  const data: any
  export default data
  export const countries: any
  export const states: any
  export const cities: any
  export const select2CountriesData: any
  export const select2ShipmentData: any
  export const cardTypesData: any
  export function vueTableData(): any
  export function vueDatatableData(): any
}

declare module '*/data.js' {
  const data: any
  export default data
  export const countries: any
  export const states: any
  export const cities: any
  export const select2CountriesData: any
  export const select2ShipmentData: any
  export const cardTypesData: any
  export function vueTableData(): any
  export function vueDatatableData(): any
}

declare module '*/MapData' {
  const mapData: any
  export default mapData
}

declare module '*/MapData.js' {
  const mapData: any
  export default mapData
}
