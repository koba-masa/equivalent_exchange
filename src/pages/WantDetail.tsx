import { get, post } from '@/apis/Base'
import { logined } from '@/components/Authentication'
import { type ResponseData } from '@/models/ResponseData'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  type WantDetail as Detail,
  type WantDetailOption
} from '@/models/WantDetail'
import '@/pages/WantDetail.scss'

const WantDetail: React.FunctionComponent = () => {
  const { wantId } = useParams<{ wantId: string }>()
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [detail, setDetail] = useState<Detail>({} as Detail)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // TODO: ユーザIDを管理する処理を実装する必要がある
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const path: string = `/v1/users/1/wants/${wantId}`

  const navigate = useNavigate()

  useEffect(() => {
    if (!logined()) {
      navigate('/login')
    }

    void fetchData()
  }, [])

  const fetchData = async (): Promise<void> => {
    const responseData: ResponseData = await get(path, {})

    if (responseData.status === 403 || responseData.status === 404) {
      // TODO: 何かする
    }
    setDetail(responseData.data.detail as Detail)
  }

  const apply = async (stockId: number): Promise<void> => {
    if (!window.confirm('交換の申し込みをしますか？')) {
      return
    }

    setMessage('')
    setErrorMessage('')

    const params = {
      stockId
    }
    const responseData: ResponseData = await post(path, params)
    if (responseData.status === 404) {
      setErrorMessage('交換候補の情報が変更されたため、申請できませんでした。')
    } else {
      setMessage('交換の申請が完了しました。')
    }
    void fetchData()
  }

  return (
    <div>
      <h1>欲しいもの</h1>
      <div className="detail">
        <div className="message">{message}</div>
        <div className="error_message">{errorMessage}</div>
        <div className="want">
          <div className="row">
            <div className="label">カテゴリ</div>
            <div className="value">{detail.category}</div>
          </div>
          <div className="row">
            <div className="label">商品</div>
            <div className="value">{detail.goods}</div>
          </div>
          <div className="row">
            <div className="label">キャラクター</div>
            <div className="value">{detail.character}</div>
          </div>
          <div className="row">
            <div className="label">ステータス</div>
            <div className="value">{detail.status}</div>
          </div>
        </div>
        <div className="stocks">
          <h2>交換候補</h2>
          <div className="header">
            <div>カテゴリ</div>
            <div>商品</div>
            <div>キャラクター</div>
            <div>備考</div>
          </div>
          {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
          {detail.options &&
            detail?.options.map((option: WantDetailOption, index: number) => (
              <React.Fragment key={index}>
                <div
                  className="row"
                  onClick={() => {
                    void apply(option.stockId)
                  }}
                >
                  <div>{option.category}</div>
                  <div>{option.goods}</div>
                  <div>{option.character}</div>
                  <div>{option.remark}</div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  )
}

export default WantDetail
