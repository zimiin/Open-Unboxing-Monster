import React, { useEffect, useState } from 'react'
import IndexTemplate from '../templates/IndexTemplate'

function IndexPage() {
  const [nicknameInput, setNicknameInput] = useState('')

  useEffect(() => {
    document.title='언박싱 몬스터 확률공시 웹'
  }, [])
  
  return (
    <IndexTemplate 
      nicknameInput={nicknameInput}
      setNicknameInput={setNicknameInput}
    />
  )
}

export default IndexPage
