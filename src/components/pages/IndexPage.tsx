import React from 'react'
import IndexTemplate from '../templates/IndexTemplate'
import { VStack, Image, Flex } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/layout'
import logo from '../../assets/logo_h.svg'


function IndexPage() {
  return (
    <VStack bgColor='blue'>
    {/* <Flex> */}
      <Flex flex={1}>
        <Image src={logo} htmlWidth='400' />
      </Flex>
      <Spacer />
      <Image src={logo} htmlWidth='400' />
    {/* </Flex> */}
    </VStack>
  )
}

export default IndexPage
