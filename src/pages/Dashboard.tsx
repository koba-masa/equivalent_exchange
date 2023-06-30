import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logined } from '@/components/Authentication'

const Dashboard: React.FunctionComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!logined()) {
      navigate('/login')
    }
  }, [])

  return <div>ダッシュボード</div>
}

export default Dashboard
