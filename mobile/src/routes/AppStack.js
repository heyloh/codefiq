import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

// Topics
import AlgoritmosStack from './AlgoritmosStack';
import VariaveisStack from './VariaveisStack';

// Components
import Header from '../components/Header';

// Contexts
import {UserContext} from '../contexts/UserContext';

const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Screen
              name="Home"
              component={Home}
              options={{
                headerShown: true,
                header: () => <Header title="Home" showBack={false} />,
              }}
            />
            <Screen name="AlgoritmosStack" component={AlgoritmosStack} />
            <Screen name="VariáveisStack" component={VariaveisStack} />
          </>
        ) : (
          <>
            <Screen name="Welcome" component={Welcome} />
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
