import React, { useEffect, useState } from 'react'
import { type Want } from '@/models/Want'

import '@/components/Wants/WantList.scss'
import { get } from '@/apis/base'
import { type ResponseData } from '@/models/ResponseData'

const WantList: React.FunctionComponent = () => {
  const [wants, setWants] = useState<Want[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const responseData: ResponseData = await get('/v1/users/1/wants', {})

      setWants(responseData.data.wants)
    }

    void fetchData()
  }, [])

  const click = (): void => {
    // TODO: ここで欲しいものの詳細画面に遷移する
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
