import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View, Button } from 'react-native';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to details screen"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };

// const DetailsScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };


const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Signup" component={SignupScreen} />
        <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default App;


// const styles = StyleSheet.create({
//   white_space: {
//     marginTop: 20
//   }
// });

