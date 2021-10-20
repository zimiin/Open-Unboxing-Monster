import React, { useState } from 'react'
import IndexTemplate from '../templates/IndexTemplate'

function IndexPage() {
  const [nicknameInput, setNicknameInput] = useState('')

  return (
    <IndexTemplate 
      nicknameInput={nicknameInput}
      setNicknameInput={setNicknameInput}
      onClickSearch={() => console.log('submit')}
    />
  )
}

export default IndexPage
