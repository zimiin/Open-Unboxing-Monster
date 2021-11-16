import React, { useState, useEffect } from 'react'
import ArchiveTemplate from '../templates/ArchiveTemplate'
import { useParams } from 'react-router-dom'
import { BoxId, BoxWithItems, Item, OpenResult } from '../../constants/types'
import { URLS } from '../../constants/urls'

function ArchivePage() {
  const { nickname } = useParams<{nickname: string}>()
  const [nicknameInput, setNicknameInput] = useState('')
  const [openResults, setOpenResults] = useState<OpenResult[]>([])
  const [boxDatas, setBoxDatas] = useState<Map<BoxId, BoxWithItems>>(new Map())
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  const getOpenDataOfUser = async (user: string): Promise<OpenResult[] | undefined> => {
    try {
      const response = await fetch(URLS.unboxing_api + 'open-result/nickname/' + nickname)
      // const response = await fetch('/open-result/nickname/' + nickname)

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const openDatas: OpenResult[] = await response.json()
      return openDatas
    } catch (error) {
      console.log('Error in getOpenDataOfUser', error)
      throw error
    }
  }

  const getBoxData = async (boxId: BoxId) => {
    try {
      const response = await fetch(URLS.unboxing_api + 'box/' + boxId)
      // const response = await fetch('/box/' + boxId)

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const boxData: BoxWithItems = await response.json()
      return boxData
    } catch (error) {
      console.log('Error in getBoxData', error)
      throw error
    }
  }

  const getDatas = async () => {
    try {
      const openDataOfUser = await getOpenDataOfUser(nickname) || []
      setOpenResults(openDataOfUser)

      const newBoxDatas: Map<BoxId, BoxWithItems> = new Map()

      for (let openData of openDataOfUser) {
        const curBoxId = openData.boxId

        if (newBoxDatas.has(curBoxId) === false) {
          const boxData = await getBoxData(curBoxId)
          newBoxDatas.set(curBoxId, boxData)
        }
      }

      setBoxDatas(newBoxDatas)
    } catch (error) {
      console.log('Error in getDatas', error)
      throw error
    }
  }

  useEffect(() => {
    document.title = nickname + '님의 오픈 기록'
    setNicknameInput(nickname)
    getDatas()
      .catch(error => console.log('Error in useEffect of ArchivePage', error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <ArchiveTemplate
      nicknameInput={nicknameInput}
      openResults={openResults}
      boxDatas={boxDatas}
      isLoading={isLoading}
      setNicknameInput={setNicknameInput}
    />
  )
}

export default ArchivePage
