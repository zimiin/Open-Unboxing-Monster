import React from 'react'
import { VStack, Image } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import logo from '../../assets/logo_h.svg'
import { useMediaQuery } from '@chakra-ui/media-query'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
  nicknameInput: string,
  setNicknameInput: (input: string) => void,
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
            w={isNotSmallerScreen ? '450px' : '300px'}
            marginLeft={isNotSmallerScreen ? '30px' : '5px'}
          >
            <Input
              placeholder='닉네임을 입력하세요'
              _placeholder={{ color: 'gray.900' }}
              bg='blue.100'
              borderColor='blue.300'
              _hover={{ borderColor: 'blue.300', background: 'white' }}
              focusBorderColor='blue.300'
              variant='filled'
              textColor='gray.900'
              borderRadius='18px'
              value={props.nicknameInput}
              onChange={(e) => props.setNicknameInput(e.target.value)}
            />

            <InputRightElement
              w='40px'
            >
              < IconButton
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

      <Box
        w='500px'
        backgroundColor='gray.100'
      >
        
      </Box>
    </VStack>
  )
}

export default ArchiveTemplate
