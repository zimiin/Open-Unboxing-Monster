import React from 'react'
import { VStack, Image, Flex, Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, IconButton } from '@chakra-ui/button'
import logo from '../../assets/logo_h.svg'

function IndexTemplate() {
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
      
      <InputGroup>
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
        />

        <InputRightElement>
          {/* <IconButton aria-label='Search' icon={} */}
        </InputRightElement>
      </InputGroup>
    </VStack>
  )
}

export default IndexTemplate
