import React from 'react'
import { VStack, Image, Flex, Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, IconButton } from '@chakra-ui/button'
import logo from '../../assets/logo_h.svg'
import { BsSearch } from 'react-icons/bs'

interface Props {
  nicknameInput: string,
  setNicknameInput: (input: string) => void,
  onClickSearch: () => void,
}

function IndexTemplate(props: Props) {
  return (
    <VStack
      h='100vh'
      justifyContent='center'
      bgColor='white'
    >
      <Image
        src={logo}
        htmlWidth='370'
      />
      
      <InputGroup
        w='450px'
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
          w='450px'
          borderRadius='18px'
          // value={props.nicknameInput}
          // onInput={(t) => props.setNicknameInput(t.value)}
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
            onClick={props.onClickSearch}
          />
        </InputRightElement>
      </InputGroup>
    </VStack>
  )
}

export default IndexTemplate
