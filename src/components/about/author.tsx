import React from 'react'
import { Icon, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import LinkButton from '../link-button'
import { ScrollView, Box, Text, VStack, Image } from 'native-base'

const Author = () => {
  return (
    <Box alignItems="center">
      <Image
        source={require('../../assets/oussama.jpeg')}
        borderRadius="full"
        resizeMode="cover"
        w={120}
        h={120}
        alt="author"
      />
    </Box>
  )
}

export default Author
