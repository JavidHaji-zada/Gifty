import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store';
import Main from './src/components/screens/Main/Main';
import Details from './src/components/screens/Details/Details';

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ title: 'Gifty' }} />
          <Stack.Screen name='Details' options={{ title: 'Gifty' }} component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;