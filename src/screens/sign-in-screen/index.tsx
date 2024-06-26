import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from 'navigation/types'
import React from 'react'
import { Button } from 'react-native'
import { Box, Text } from 'utils/theme'

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignIn'>>()
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp')
  }

  return (
    <Box>
      <Text>
        Sign in screnn
        <Button
          title='Navigate to sign up'
          onPress={navigateToSignUpScreen}
        ></Button>
      </Text>
    </Box>
  )
}

export default SignInScreen
