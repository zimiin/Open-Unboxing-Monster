import { Button, IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useMediaQuery } from '@chakra-ui/media-query'
import { parseDate } from '../../utils/utils'
import monster_logo from '../../assets/monster.png'
import Chart from "react-google-charts";
import Label from '../atoms/Label'
import Legend from '../molecules/Legend'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BoxWithItems, Item, OpenResult } from '../../constants/types'

export const PROB_COLORS = [
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8",
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8"
]

const ArchiveItem = ({
  openResult,
  colorSet,
  chartData,
  boxData,
  resultItemData,
  my,
}: {
  openResult: OpenResult,
  colorSet?: number,
  chartData?: any[],
  boxData?: BoxWithItems,
  resultItemData?: Item,
  my?: string
}) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:690px)")
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [tab, setTab] = useState<string>('info')

  const mainColor = colorSet === 1 ? 'white' : '#edf8ff'
  const deeperColor = colorSet === 1 ? 'blue.200' : 'blue.300'

  return (
    <Box 
      // my='50px'
    >
      <Box
        w={isNotSmallerScreen ? '1000px' : '445px'}
        bgColor={mainColor}
        py='8px'
        px='15px'
        marginY='6px'
        borderRadius='10px'
        borderColor={colorSet === 1 ? 'blue.300' : 'blue.500'}
        borderWidth='1px'
      >
        <Flex>
          <Link 
            href={"https://scope.klaytn.com/tx/" + openResult.tx_hash}
            isExternal
            fontSize='11'
            color='gray.900'
          >
            {'트랜잭션해시: ' + openResult.tx_hash}

            <ExternalLinkIcon mx='3px'/>
          </Link>

          <Flex
            flex='1'
            justifyContent='flex-end'
          >
            <Text
              color='gray.900'
              fontSize='11'
            >
              {'당첨일시: ' + parseDate(new Date(openResult.openAt))}
              {/* {'당첨일시: ' + item.openData.openAt} */}
            </Text>
          </Flex>
        </Flex>
        

        <Flex
          marginTop='8px'
        >
          <Image
            src={resultItemData?.image || 'https://user-images.githubusercontent.com/45932570/128672505-7b277913-a1e1-4b25-be16-07dee659a263.png'}
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
                {boxData?.title + ' (' + boxData?.price.toLocaleString() + '원)'}
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
                {resultItemData?.title + ' (' + resultItemData?.price.toLocaleString() + '원)'}
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
                  {'랜덤시드: ' + openResult.seed}
                </Text>

                <Flex
                  flexDir='row'
                >
                  <Flex
                    flex='2'
                    alignItems='center'
                    justifyContent='center'
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
                  </Flex>

                  <Flex 
                    flex='3'
                    // bgColor='red'
                  >
                    <Flex
                      flexDir='column'
                    // bgColor='red'
                    >
                      <Flex>
                        <Image
                          src={boxData?.image || 'https://user-images.githubusercontent.com/45932570/128672505-7b277913-a1e1-4b25-be16-07dee659a263.png'}
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
                              {boxData?.title + ' (' + boxData?.price.toLocaleString() + '원)'}
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
                              {resultItemData?.title + ' (' + resultItemData?.price.toLocaleString() + '원)'}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>

                      <Label
                        text='박스구성상품'
                        color='gray.500'
                        mt='5px'
                        mb='7px'
                      />

                      <Flex
                        flexWrap='wrap'
                      >
                        {chartData?.map(
                          (data, index) => {
                            console.log(index, data)
                            if (index !== 0) {
                              return (
                                <Box
                                  my='3px'
                                  w='250px'
                                // bgColor={PROB_COLORS[(index - 1) % PROB_COLORS.length]}
                                >
                                  <Legend
                                    text={data[0]}
                                    color={PROB_COLORS[(index - 1) % PROB_COLORS.length]}
                                  />
                                </Box>
                              )
                            }
                          }
                        )}
                      </Flex>
                    </Flex>
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
    </Box>
  )
}

export default ArchiveItem
