import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

function Label({text, color}: {text: string, color: string}) {
  return (
    <Box
      bgColor={color}
      px='3px'
      py='1px'
      borderRadius='5px'
      h='fit-content'
      w='fit-content'
    >
      <Text
        color='white'
      >
        {text}
      </Text>
    </Box>
  )
}

export default Label
