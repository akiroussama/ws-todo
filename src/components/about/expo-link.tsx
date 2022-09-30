import React from 'react'
import { Icon,  } from 'native-base'
import { Feather } from '@expo/vector-icons'
import LinkButton from '../link-button'

const ExpoLink = () => {
  return (
    <LinkButton
      colorScheme="purple"
      size="lg"
      borderRadius="full"
      href="https://snack.expo.dev/"
      leftIcon={
        <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
      }
    >
      link of deployment ( snack ? )
    </LinkButton>
  )
}

export default ExpoLink
