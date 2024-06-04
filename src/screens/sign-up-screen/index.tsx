import { useNavigation } from '@react-navigation/native'
// import Button from 'components/button'
import { AuthScreenNavigationType } from 'navigation/types'
import React from 'react'
import { Button } from 'react-native'
import { Box, Text } from 'utils/theme'

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignUp'>>()
  const navigateToSignInScreen = () => {
    navigation.navigate('SignUp')
  }

  return (
    <Box>
      <Text>
        Sign up screnn
        <Button
          title='Navigate to sign up'
          onPress={navigateToSignInScreen}
        ></Button>
      </Text>
    </Box>
  )
}

export default SignUpScreen
