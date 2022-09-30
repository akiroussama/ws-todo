import React from 'react'
import { Icon, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import LinkButton from '../link-button'

const WildschoolLink = () => {
  return (
    <LinkButton
      colorScheme={useColorModeValue('pink', 'green')}
      size="lg"
      borderRadius="full"
      href="https://www.wildcodeschool.com/"
      leftIcon={
        <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
      }
    >
      Wild School
    </LinkButton>
  )
}

export default WildschoolLink
