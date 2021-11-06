import { Button, IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { ArchiveItemType } from '../pages/ArchivePage'
import { useMediaQuery } from '@chakra-ui/media-query'
import { parseDate } from '../../utils/utils'

const ArchiveItem = ({ item, colorSet }: { item: ArchiveItemType, colorSet?: number }) => {
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
              <Box
                bgColor='red.400'
                px='3px'
                py='1px'
                borderRadius='5px'
              >
                <Text
                  color='white'
                >
                  박스이름
                </Text>
              </Box>

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
              <Box
                bgColor='teal.400'
                px='3px'
                py='1px'
                borderRadius='5px'
              >
                <Text
                  color='white'
                >
                  당첨상품
                </Text>
              </Box>

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
            flexDir='row'
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
            py='20px'
            px='20px'
            backgroundColor={deeperColor}
            borderBottomRadius='10px'
          >
            <Box
              backgroundColor={'white'}
            >
              <Text>Halo</Text>
            </Box>
          </Box>
        </Box>
      : undefined}
    </>
  )
}

export default ArchiveItem
