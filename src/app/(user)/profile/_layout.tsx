import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProfileStack = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ 
        title: 'Your Profile', 
        headerShown: true, 
        headerTransparent: true, 
        headerTitleAlign: 'center', 
        headerTitleStyle: { fontSize: 24, fontWeight: '500' } }} 
        
      />
    </Stack> 
  )
}

export default ProfileStack