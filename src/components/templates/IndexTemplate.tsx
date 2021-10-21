import React from 'react'
import { VStack, Image, Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import logo from '../../assets/logo_h.svg'
import { BsSearch } from 'react-icons/bs'

interface Props {
  nicknameInput: string,
  setNicknameInput: (input: string) => void,
}

function IndexTemplate(props: Props) {
  const archive: string = '/archive/' + props.nicknameInput

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
      
      <form
        action={archive}
      >
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
            value={props.nicknameInput}
            onChange={(e) => props.setNicknameInput(e.target.value)}
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
    </VStack>
  )
}

export default IndexTemplate
