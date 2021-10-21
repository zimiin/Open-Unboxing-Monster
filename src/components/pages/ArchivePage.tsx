import React, { useState, useEffect } from 'react'
import ArchiveTemplate from '../templates/ArchiveTemplate'
import { useParams } from 'react-router-dom'

function ArchivePage() {
  const [nicknameInput, setNicknameInput] = useState('')
  const { nickname } = useParams<{nickname: string}>()
  
  useEffect(() => {
    setNicknameInput(nickname)
  }, [])

  return (
    <ArchiveTemplate
      nicknameInput={nicknameInput}
      setNicknameInput={setNicknameInput}
    />
  )
}

export default ArchivePage
