import { IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { ArchiveItemType } from '../pages/ArchivePage'
import { useMediaQuery } from '@chakra-ui/media-query'
import { parseDate } from '../../utils/utils'

const ArchiveItem = ({ item, colorSet }: { item: ArchiveItemType, colorSet?: number }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:690px)")
  const [openDetail, setOpenDetail] = useState<boolean>(false)

  return (
    <>
      <Box
        w={isNotSmallerScreen ? '660px' : '445px'}
        bgColor={colorSet === 1 ? 'blue.100' : 'blue.200'}
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
            fontSize='sm'
            flex={'1'}
          >
            {'블록해시: ' + item.blockHash}
          </Text>

          <Text
            color='gray.900'
            fontSize='sm'
          >
            {'당첨일시: ' + parseDate(new Date(item.openData.openAt))}
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
            marginLeft='10px'
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
              icon={<BsChevronDown />}
              backgroundColor={colorSet === 1 ? 'blue.200' : 'blue.100'}
              color='gray.900'
              onClick={() => setOpenDetail(!openDetail)}
            />
          </Flex>
        </Flex>
      </Box>

      {openDetail === true ? <Text color='black'>true!!!</Text> : undefined}
    </>
  )
}

export default ArchiveItem
