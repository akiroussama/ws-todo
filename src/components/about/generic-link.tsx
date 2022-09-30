import React from 'react'
import { Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
import LinkButton from '../link-button'

interface LinkObj {
  colorScheme: string
  href: string
  title: string
}
const GenericLink = (props: LinkObj) => {
  const { colorScheme, href, title } = props
  return (
    <LinkButton
      colorScheme={colorScheme}
      size="lg"
      borderRadius="full"
      href={href}
      leftIcon={
        <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
      }
    >
      {title}
    </LinkButton>
  )
}

export default GenericLink
