import { Button, IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { ArchiveItemType } from '../pages/ArchivePage'
import { useMediaQuery } from '@chakra-ui/media-query'
import { parseDate } from '../../utils/utils'
import monster_logo from '../../assets/monster.png'
import Chart from "react-google-charts";
import Label from '../atoms/Label'

export const PROB_COLORS = [
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8",
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8"
]

const ArchiveItem = ({
  item,
  colorSet,
  chartData,
  chartColors,
}: {
  item: ArchiveItemType,
  colorSet?: number,
  chartData?: any[] | {},
  chartColors?: string[]
}) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:690px)")
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [tab, setTab] = useState<string>('info')

  const mainColor = colorSet === 1 ? 'white' : '#edf8ff'
  const deeperColor = colorSet === 1 ? 'blue.200' : 'blue.300'

  return (
    <>
      <Box
        w={isNotSmallerScreen ? '1000px' : '445px'}
        bgColor={mainColor}
        py='8px'
        px='15px'
        marginY='10px'
        borderRadius='10px'
        borderColor={colorSet === 1 ? 'blue.300' : 'blue.500'}
        borderWidth='1px'
      >
        <Flex>
          <Text
            color='gray.900'
            fontSize='11'
            flex={'1'}
          >
            {'블록해시: ' + item.blockHash}
          </Text>

          <Text
            color='gray.900'
            fontSize='11'
          >
            {/* {'당첨일시: ' + parseDate(new Date(item.openData.openAt))} */}
            {'당첨일시: ' + item.openData.openAt}
          </Text>
        </Flex>
        

        <Flex
          marginTop='8px'
        >
          <Image
            src={item.boxData.image}
            w='70px'
            h='70px'
            borderRadius='5px'
          />

          <Flex
            direction='column'
            flex={1}
            marginLeft='20px'
            justifyContent='center'
          >
            <Flex
              direction='row'
              alignItems='center'
            >
              <Label
                color='red.400'
                text='박스이름'
              />

              <Text
                color='black'
                marginLeft='5px'
              >
                {item.boxData.title}
              </Text>
            </Flex>

            <Flex
              direction='row'
              marginTop='5px'
              alignItems='center'
            >
              <Label
                color='teal.400'
                text='당첨상품'
              />

              <Text
                color='black'
                marginLeft='5px'
              >
                {item.openData.item.title}
              </Text>
            </Flex>
          </Flex>

          <Flex
            alignItems='flex-end'
          >
            <IconButton
              aria-label='flip'
              icon={showDetail ? <BsChevronUp /> : <BsChevronDown />}
              backgroundColor={colorSet === 1 ? 'blue.200' : 'blue.100'}
              color='gray.900'
              onClick={() => setShowDetail(!showDetail)}
            />
          </Flex>
        </Flex>
      </Box>

      {showDetail === true ? 
        <Box
          w={isNotSmallerScreen ? '1000px' : '445px'}
          bgColor={'white'}
          paddingTop='15px'
          marginY='10px'
          borderRadius='10px'
          borderColor={colorSet === 1 ? 'blue.300' : 'blue.500'}
          borderWidth='1px'
        >
          <Flex
            flexDirection='row'
          >
            <Button
              bgColor={tab === 'info' ? deeperColor : 'gray.200'}
              py='7px'
              px='30px'
              marginLeft='20px'
              borderTopRadius='10px'
              borderBottomRadius='0px'
              width='120px'
              alignItems='center'
              onClick={() => setTab('info')}
            >
              <Text
                color='black'
              >
                박스정보
              </Text>
            </Button>

            <Button
              bgColor={tab === 'replay' ? deeperColor : 'gray.100'}
              py='7px'
              px='30px'
              marginLeft='20px'
              borderTopRadius='10px'
              borderBottomRadius='0px'
              width='120px'
              alignItems='center'
              onClick={() => setTab('replay')}
            >
              <Text
                color='black'
              >
                재현하기
              </Text>
            </Button>
          </Flex>

          <Box
            // pt='20px'
            borderTopColor={deeperColor}
            borderTopWidth={'3px'}
            // backgroundColor={deeperColor}
            borderBottomRadius='10px'
            backgroundColor={'white'}
            py='10px'
            px='20px'
          >
            {tab === 'info' ?
              <>
                <Text
                  color='black'
                  fontSize='sm'
                >
                  {'랜덤시드: ' + item.randomSeed}
                </Text>

                <Flex
                  flexDir='row'
                >
                  <Chart
                    chartType='PieChart'
                    width='300px'
                    height='300px'
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    rootProps={{ 'data-testid': '1' }}
                    options={{
                      legend: 'none',
                      colors: PROB_COLORS,
                    }}
                  />

                  <Flex
                    flexDir='column'
                    // bgColor='red'
                  >
                    <Flex>
                      <Image
                        src={item.boxData.image}
                        width='70px'
                        height='70px'
                      />

                      <Flex
                        direction='column'
                        ml='15px'
                      >
                        <Flex
                          direction='row'
                          alignItems='center'
                        >
                          <Label
                            text='박스이름'
                            color='red.400'
                          />

                          <Text
                            color='black'
                            marginLeft='5px'
                          >
                            {item.boxData.title}
                          </Text>
                        </Flex>

                        <Flex
                          direction='row'
                          marginTop='5px'
                          alignItems='center'
                        >
                          <Label
                            text='당첨상품'
                            color='teal.400'
                          />

                          <Text
                            color='black'
                            marginLeft='5px'
                          >
                            {item.openData.item.title}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Label
                      text='박스구성상품'
                      color='gray.500'
                    />
                  </Flex>
                </Flex>
              </>
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
                  준비중입니다.
                </Text>
              </Flex>
            }
          </Box>
        </Box>
      : undefined}
    </>
  )
}

export default ArchiveItem