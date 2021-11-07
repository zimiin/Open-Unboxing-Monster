import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

function Legend({
  color,
  text,
}: {
  color?: string,
  text?: string,
}) {
  return (
    <Flex
      flexDir='row'
      alignItems='center'
    >
      <Box
        w='10px'
        h='10px'
        bgColor={color || 'black'}
      />

      <Text
        color='black'
        mx='15px'
      >
        {text}
      </Text>
    </Flex>
  )
}

export default Legend
