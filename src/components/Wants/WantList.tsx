import React, { useEffect, useState } from 'react'
import { type Want } from '@/models/Want'
import { useNavigate } from 'react-router-dom'
import '@/components/Wants/WantList.scss'
import { get } from '@/apis/Base'
import { type ResponseData } from '@/models/ResponseData'

const WantList: React.FunctionComponent = () => {
  const [wants, setWants] = useState<Want[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // TODO: ユーザIDを管理する処理を実装する必要がある
      const responseData: ResponseData = await get('/v1/wants', {})

      setWants(responseData.data.wants)
    }

    void fetchData()
  }, [])

  const click = (id: number): void => {
    navigate(`/want/${id}`)
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
            <div className="row" onClick={() => { click(want.id) }}>
              <div>{want.category_name}</div>
              <div>{want.good_name}</div>
              <div>{want.character_name}</div>
              <div>{want.status}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default WantList
