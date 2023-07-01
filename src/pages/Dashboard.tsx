import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logined } from '@/components/Authentication'
import WantList from '@/components/Wants/WantList'

const Dashboard: React.FunctionComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!logined()) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <div>
        <WantList />
      </div>
    </>
  )
}

export default Dashboard
