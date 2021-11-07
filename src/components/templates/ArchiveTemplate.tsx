import React from 'react'
import { VStack, Image } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import logo from '../../assets/logo_h.svg'
import { useMediaQuery } from '@chakra-ui/media-query'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ArchiveItemType } from '../pages/ArchivePage'
import ArchiveItem from '../organisms/ArchiveItem'
import { generateProbability } from '../../utils/utils'

interface Props {
  nicknameInput: string,
  setNicknameInput: (input: string) => void,
  archiveItems: ArchiveItemType[]
}

function ArchiveTemplate(props: Props) {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:690px)")
  const archive: string = '/archive/' + props.nicknameInput

  return (
    <VStack
      minH='100vh'
      bgColor='white'
    >
      <Flex
        direction='row'
        justifyContent='center'
        alignItems='center'
        paddingTop='10px'
        marginBottom='10px'
      >
        <Link to="/">
          <Image
            src={logo}
            htmlWidth={isNotSmallerScreen ? '180' : '140'}
          />
        </Link>

        <form
          action={archive}
        >
          <InputGroup
            w={isNotSmallerScreen ? '600px' : '300px'}
            marginLeft={isNotSmallerScreen ? '30px' : '5px'}
          >
            <Input
              placeholder='닉네임을 입력하세요'
              _placeholder={{ color: 'gray.900' }}
              bg='white'
              borderColor='blue.300'
              _hover={{ borderColor: 'blue.300', background: 'white' }}
              focusBorderColor='blue.300'
              variant='filled'
              textColor='gray.900'
              borderRadius='18px'
              value={props.nicknameInput}
              onChange={(e) => props.setNicknameInput(e.target.value)}
              onFocus={(e) => e.target.select()}
            />

            <InputRightElement
              w='40px'
            >
              <IconButton
                aria-label='Search'
                icon={<BsSearch />}
                color='black'
                bg='none'
                _focus={{ border: 'hidden' }}
                _hover={{ background: 'none' }}
                _active={{ background: 'none' }}
                type='submit'
              />
            </InputRightElement>
          </InputGroup>
        </form>
      </Flex>

      {/* 데이터 없을 때 처리 */}
      {props.archiveItems.length !== 0 ?
        (
          props.archiveItems.map(
            (item, index) => {
              const chartData: (string | number)[][] = [['item', 'prob']]
              const boxItems = item.boxData.items.sort((a, b) => (a.price < b.price ? 1 : -1));
              const reverseSortedPrice = boxItems.map((a) => a.price)
              const probabilities: number[] = generateProbability(reverseSortedPrice, item.boxData.price)
              
              for (let i = 0; i < boxItems.length ; i++) {
                let chartItem: (string | number)[] = []
                chartItem.push(boxItems[i].title)
                chartItem.push(probabilities[i])

                chartData.push(chartItem)
              }

              console.log(chartData)

              return (
                <ArchiveItem
                  item={item}
                  colorSet={index % 2}
                  chartData={chartData}
                />
              )
            }
          )
        )
        : undefined
      }
      
    </VStack>
  )
}

export default ArchiveTemplate
