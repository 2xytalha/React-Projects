
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CommentScreen from './screens/CommentScreen';
import LikeScreen from './screens/LikeScreen';
import ImageSharingScreen from './screens/ImageSharingScreen';
import UpdateProfileImageScreen from './screens/UpdateProfileImageScreen';
import FriendsScreen from './screens/FriendsScreen';
import DeleteAccountScreen from './screens/DeleteAccountScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Comments" component={CommentScreen} />
        <Stack.Screen name="Likes" component={LikeScreen} />
        <Stack.Screen name="ImageSharing" component={ImageSharingScreen} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfileImageScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
