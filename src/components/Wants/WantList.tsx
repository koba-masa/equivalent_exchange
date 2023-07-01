import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { type Want } from '@/models/Want'

import '@/components/Wants/WantList.scss'

const WantList: React.FunctionComponent = () => {
  const [wants, setWants] = useState<Want[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await getWants()
      setWants(data.wants)
    }

    void fetchData()
  }, [])

  const click = (): void => {
    // TODO: ここで欲しいものの詳細画面に遷移する
  }

  const getWants = async (): Promise<any> => {
    try {
      const response = await axios.get('http://localhost:5173/v1/users/1/wants')

      return response.data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  return (
    <div>
      <h1>欲しいものリスト</h1>
      <div className="list">
        <div className="header">
          <div>カテゴリ</div>
          <div>商品名</div>
          <div>区分</div>
          <div>ステータス</div>
        </div>
        {wants.map((want: Want, index: number) => (
          <React.Fragment key={index}>
            <div className="row" onClick={click}>
              <div>{want.category}</div>
              <div>{want.goods}</div>
              <div>{want.name}</div>
              <div>{want.status}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default WantList
