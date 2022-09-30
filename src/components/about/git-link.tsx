import React from 'react'
import { Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
import LinkButton from '../link-button'

const GitrepoLink = () => {
  return (
    <LinkButton
      colorScheme="yellow"
      size="lg"
      borderRadius="full"
      
      leftIcon={
        <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
      }
    >
     
    </LinkButton>
  )
}

export default GitrepoLink
