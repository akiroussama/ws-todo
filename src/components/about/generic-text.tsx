import React from 'react'
import { Text } from 'native-base'

type Props = {
  title: string
}

export default function GenText(props: Props) {
  const { title } = props
  return (
    <Text fontSize="md" w="full" paddingLeft={5} marginTop={40}>
      {title}
    </Text>
  )
}
