export interface WantDetailOption {
  stock_id: number
  category_name: string
  good_name: string
  character_name: string
  remark: string
}

export interface WantDetail {
  id: number
  category_name: string
  good_name: string
  character_name: string
  status: string
  options: WantDetailOption[]
}
