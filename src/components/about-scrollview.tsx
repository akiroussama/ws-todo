import React from 'react'
import { ScrollView, VStack, useColorModeValue } from 'native-base'
import GenericLink from './about/generic-link'
import Author from './about/author'
import GenText from './about/generic-text'
import Links from '../store/links'

const AboutScrollView = () => {
  return (
    <ScrollView
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      mt="-20px"
      pt="30px"
      p={7}
    >
      <VStack flex={1} space={4}>
        <Author />
        {Links.map(item => (
          <GenericLink
            key={item.id}
            href={item.href}
            title={item.title}
            colorScheme={item.colorScheme}
          />
        ))}
        <GenText title="A React Native mobile app Built with love 💘" />
      </VStack>
    </ScrollView>
  )
}

export default AboutScrollView
