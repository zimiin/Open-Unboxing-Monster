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
        blockHash: '0x0c1f132fc84a2b25e912da916691dfc1197cd40ffb96333a26c73f433c83cdf3',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '스타벅스 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20201123/20201123150757_29381b33-2cb8-4aa7-942b-ccd467ffa2bf_V.jpg',
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
              title: '달콤한 디저트 세트',
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
          // openAt: new Date().toString(),
          openAt: '2021.11.05 11:16:12',
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
            title: '달콤한 디저트 세트',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      }, 
      {
        blockHash: '0x0c1f132fc84a2b252212da91669984c11909840fber698ya243d38tu3c83adf4',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '스타벅스 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20200727/20200727154908_f79c7f5d-c1e0-4090-9cef-1ad40e869c13_V.jpg',
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
              title: '케페아메리카노',
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
          // openAt: new Date().toString(),
          openAt: '2021.11.05 11:13:50',
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
            title: '케페아메리카노',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      },
      {
        blockHash: '0x1qaf132fc84a2b25221mnmt91699784c119098ntfber698ya9trd38tu0ui3a965',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '쿠팡이츠 상품권 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210915/20210915161457_c147380e-53f0-4e1e-be3e-fec264b177fd_V.png',
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
          // openAt: new Date().toString(),
          openAt: '2021.11.01 20:08:01',
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
            title: '쿠팡이츠 5천원권',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      },
      {
        blockHash: '0x1qaf132fc84a2b25221mnmt987932f84c119098ntfber698ya9trd38tu0ui3a53',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '치킨 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210914/20210914111545_41495180-970c-4ed6-b004-75f2cbbea02e_V.jpg',
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
          // openAt: new Date().toString(),
          openAt: '2021.11.01 09:59:02',
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
            title: '살살퐁듀치즈볼세트',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      },
      {
        blockHash: '0xm61f132fc65i2b25221mnmt987932f84c1ag398ntfber698ya9trd38tucvd3a53',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '스타벅스 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20200727/20200727154908_f79c7f5d-c1e0-4090-9cef-1ad40e869c13_V.jpg',
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
              title: '케페아메리카노',
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
          // openAt: new Date().toString(),
          openAt: '2021.10.30 22:09:57',
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
            title: '케페아메리카노',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      },
      {
        blockHash: '0x760f132fc65i2b252219ir5987932f84c1ag3lds4f6er698ya9trd773ucvd3a537',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '저녁 뭐먹지 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210310/20210310165256_9888a764-ef57-4734-9f72-ee774ed0104a_V.jpg',
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
              title: '케페아메리카노',
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
          // openAt: new Date().toString(),
          openAt: '2021.10.30 22:08:44',
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
            title: '페퍼로니(오리지널)L+콜라1.25L',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      },
      {
        blockHash: '0x0ltf132fc65i2b251279ir5987932f84c1ag3lds4f85t698ya9trd773ucvd3ayn53',
        randomSeed: '123123123',
        boxData: {
          id: 1,
          title: '디저트 박스',
          price: 5000,
          image: 'https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20200109/20200109143712_de300d04-9db5-4edf-86e1-465b35c3a78e_V.png',
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
              title: '딸기요거트플랫치노(ICE)',
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
          // openAt: new Date().toString(),
          openAt: '2021.10.27 15:16:50',
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
            title: '딸기요거트플랫치노(ICE)',
            price: 3000,
            image: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg',
            detail: '카구리먹고싶다'
          }
        }
      },
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
