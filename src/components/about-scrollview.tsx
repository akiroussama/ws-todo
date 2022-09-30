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
        {/* Premier Refactoring de code */}
        {/* <GenericLink
          href="https://github.com/akiroussama/ws-todo"
          title=" Go to the github repository"
          colorScheme="yellow"
        />
        <GenericLink
          href="https://snack.expo.dev/"
          title="link of deployment ( snack ? )"
          colorScheme="purple"
        />
        <GenericLink
          href="https://www.wildcodeschool.com/"
          title="Wild School"
          colorScheme={useColorModeValue('pink', 'green')}
        /> */}
        {/*  Première version du code */}
        {/* <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/devaslife"
            leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }
          >
            Go to YouTube channel
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://twitter.com/inkdrop_app"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            @inkdrop_app
          </LinkButton> */}
        <GenText title="A React Native mobile app Built with love 💘" />
      </VStack>
    </ScrollView>
  )
}

export default AboutScrollView
