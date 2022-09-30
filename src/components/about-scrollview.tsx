import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import ExpoLink from './about/expo-link'
import GitrepoLink from './about/git-link'
import WildschoolLink from './about/wild-link'
import Author from './about/author'

const AboutScrollView = () => {
  return (
    <ScrollView
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      mt="-20px"
      pt="30px"
      p={4}
    >
      <VStack flex={1} space={4}>
        <Author />
        <GitrepoLink />
        <WildschoolLink />
        <Text fontSize="md" w="full">
          Here we will add the link of deployment ( snack ? )
        </Text>
        <ExpoLink />
        <Text fontSize="md" w="full">
          A React Native mobile app Built with love 💘
        </Text>
      </VStack>
    </ScrollView>
  )
}

export default AboutScrollView
