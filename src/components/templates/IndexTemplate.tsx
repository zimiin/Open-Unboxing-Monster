import React from 'react'
import { VStack, Image, Flex } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/layout'
import './IndexTemplate.css'
import logo from '../../assets/logo_h.svg'

function IndexTemplate() {
  return (
    <Flex bgColor='blue' h='100vh' flexDir='column'>
    {/* VStack h='100%' bgColor='blue' > */}
      <Spacer />
      <Image src={logo} flex={1} htmlWidth='400'/>
      <Image src={logo} htmlWidth='400' />
    {/* </VStack> */}
    </Flex>
  )
}

export default IndexTemplate
