import React from 'react'
import { Box, useColorModeValue } from 'native-base'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import AboutScrollView from '../components/about-scrollview'

const AboutScreen = () => {
  return (
    <Box
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <AboutScrollView></AboutScrollView>
    </Box>
  )
}

export default AboutScreen
