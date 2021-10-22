import React, { useState, useEffect } from 'react'
import ArchiveTemplate from '../templates/ArchiveTemplate'
import { useParams } from 'react-router-dom'
import { BoxWithItems, OpenResult } from '../../constants/types'

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

    // temp data
    setArchiveItems([
      {
        blockHash: '123123123',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '임시 박스',
          price: 5000,
          image: 'https://user-images.githubusercontent.com/45932570/129535240-50cb4e7b-fb8c-4315-9bfc-6a79a3b7d425.png',
          isLocal: false,
          detail: '임시 박스입니다.',
          ownerId: '1',
          sales: 30,
          isManager: true,
          items: [
            {
              id: 3,
              productId: '123',
              seller: 1,
              title: '커피',
              price: 3000,
              image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
              detail: '카구리먹고싶다'
            }
          ]
        },
        openData: {
          id: 1,
          boxId: 1,
          userId: '1',
          itemId: 3,
          openAt: new Date().toString(),
          user: {
            email: 'wlals6105@naver.com',
            id: '1',
            nickname: '지민스',
            point: 1000,
            isManager: true,
          },
          item: {
            id: 3,
            productId: '123',
            seller: 1,
            title: '커피',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      }, 
      {
        blockHash: '123123123',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '임시 박스',
          price: 5000,
          image: 'https://user-images.githubusercontent.com/45932570/129535240-50cb4e7b-fb8c-4315-9bfc-6a79a3b7d425.png',
          isLocal: false,
          detail: '임시 박스입니다.',
          ownerId: '1',
          sales: 30,
          isManager: true,
          items: [
            {
              id: 3,
              productId: '123',
              seller: 1,
              title: '커피',
              price: 3000,
              image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
              detail: '카구리먹고싶다'
            }
          ]
        },
        openData: {
          id: 1,
          boxId: 1,
          userId: '1',
          itemId: 3,
          openAt: new Date().toString(),
          user: {
            email: 'wlals6105@naver.com',
            id: '1',
            nickname: '지민스',
            point: 1000,
            isManager: true,
          },
          item: {
            id: 3,
            productId: '123',
            seller: 1,
            title: '커피',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      }
      // temp data end
    ])
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
