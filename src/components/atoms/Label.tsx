import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

function Label({
  text, 
  color,
  mt,
  mb,
}: {
  text: string, 
  color: string,
  mt?: string,
  mb?: string,
}) {
  return (
    <Box
      bgColor={color}
      px='3px'
      py='1px'
      borderRadius='5px'
      h='fit-content'
      w='fit-content'
      mt={mt}
      mb={mb}
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
