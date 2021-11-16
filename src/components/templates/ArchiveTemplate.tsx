import React from 'react'
import { VStack, Image, Spinner } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import logo from '../../assets/logo_h.svg'
import { useMediaQuery } from '@chakra-ui/media-query'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ArchiveItem from '../organisms/ArchiveItem'
import { generateProbability } from '../../utils/utils'
import { BoxId, BoxWithItems, Item, OpenResult } from '../../constants/types'
import monster_logo from '../../assets/monster.png'

interface Props {
  nicknameInput: string,
  openResults: OpenResult[],
  boxDatas: Map<BoxId, BoxWithItems>,
  isLoading: boolean,
  setNicknameInput: (input: string) => void,
}

const getChartDataOfBox = (box: BoxWithItems): (string | number)[][] => {
  const chartData: (string | number)[][] = [['item', 'prob']]
  const boxItems = box.items.sort((a, b) => (a.price < b.price ? 1 : -1));
  const reverseSortedPrice = boxItems.map((a) => a.price)
  const probabilities: number[] = generateProbability(reverseSortedPrice, box.price)

  for (let i = 0; i < boxItems.length; i++) {
    let chartItem: (string | number)[] = []
    chartItem.push(boxItems[i].title + ' (' + boxItems[i].price.toLocaleString() + '원)')
    chartItem.push(probabilities[i])

    chartData.push(chartItem)
  }

  return chartData
}

function ArchiveTemplate(props: Props) {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:690px)")
  const archive: string = '/archive/' + props.nicknameInput

  return (
    <>
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
          mt='50px'
          mb='30px'
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

        {props.isLoading ? 
          <Spinner
            color="gray.800"
            size="md"
          />
          :
          undefined
        }

        {/* 데이터 없을 때 처리 */}
        {props.openResults.length !== 0 ?
          (
            props.openResults.map(
              (item, index) => {
                const boxData = props.boxDatas.get(item.boxId)
                let chartData = undefined
                if (boxData) {
                  chartData = getChartDataOfBox(boxData)
                }
                const itemData: Item | undefined = boxData?.items.find(itemInBox => itemInBox.id === item.itemId)

                return (
                  <ArchiveItem
                    openResult={item}
                    colorSet={index % 2}
                    chartData={chartData}
                    boxData={boxData}
                    resultItemData={itemData}
                    // my='10px'
                  />
                )
              }
            )
          )
          : 
          <Flex
            h='sm'
            alignItems='center'
            justifyContent='center'
            flexDir='column'
          >
            <Image
              src={monster_logo}
              width='100px'
            />

            <Text
              color='black'
              mt='13px'
            >
              오픈데이터가 없습니다.
            </Text>
          </Flex>
        }
      </VStack>
      
      <Box
        h='100px'
        bgColor='white'
      />

      <Flex
        bgColor='gray.700'
        h='100px'
      >
      </Flex>
    </>
  )
}

export default ArchiveTemplate
