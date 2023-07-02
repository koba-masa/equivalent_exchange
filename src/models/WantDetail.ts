export interface WantDetailOption {
  stockId: number
  category: string
  goods: string
  character: string
  remark: string
}

export interface WantDetail {
  id: number
  category: string
  goods: string
  character: string
  status: string
  options: WantDetailOption[]
}
