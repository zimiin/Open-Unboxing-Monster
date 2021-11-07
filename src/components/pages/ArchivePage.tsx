import React, { useState, useEffect } from 'react'
import ArchiveTemplate from '../templates/ArchiveTemplate'
import { useParams } from 'react-router-dom'
import { BoxWithItems, OpenResult } from '../../constants/types'
import { archives } from '../../data/data'

export type ArchiveItemType = {
  blockHash: string,
  randomSeed: string,
  boxData: BoxWithItems,
  openData: OpenResult,
}

function ArchivePage() {
  const [nicknameInput, setNicknameInput] = useState('')
  const [archiveItems, setArchiveItems] = useState<ArchiveItemType[]>([])
  const { nickname } = useParams<{nickname: string}>()
  
  useEffect(() => {
    setNicknameInput(nickname)
    setArchiveItems(archives)
  }, [])

  return (
    <ArchiveTemplate
      archiveItems={archiveItems}
      nicknameInput={nicknameInput}
      setNicknameInput={setNicknameInput}
    />
  )
}

export default ArchivePage
