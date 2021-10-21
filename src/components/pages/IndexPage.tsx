import React, { useState } from 'react'
import IndexTemplate from '../templates/IndexTemplate'

function IndexPage() {
  const [nicknameInput, setNicknameInput] = useState('')

  const linkToArchive = () => {
    window.location.href = `/archive/${nicknameInput}`
  }

  return (
    <IndexTemplate 
      nicknameInput={nicknameInput}
      setNicknameInput={setNicknameInput}
      onClickSearch={linkToArchive}
    />
  )
}

export default IndexPage
