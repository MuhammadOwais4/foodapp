import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import EditItem from './screens/EditItem.js';
import SelectLogin from './screens/user/SelectLogin';
import UserLogin from './screens/user/UserLogin';
import UserSignup from './screens/user/UserSignup';
import Home from './screens/user/Home';
import Cart from './screens/user/Cart';
import Checkout from './screens/user/checkout/Checkout';
import Address from './screens/user/checkout/Address';
import OrderHistory from './screens/OrderHistory';
import Payment from './screens/Payment'
import PaymentSuccess from './screens/PaymentSuccess.js'
import EiditProfile from './screens/common/eiditProfile.js';
import Profile from './screens/user/BottomNavigation/Profile.js';
import QuickBite from './screens/user/BottomNavigation/QuickBite.js';
import OrderTracking from './screens/user/BottomNavigation/OrderTracking.js';



const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={EditItem}
          name="EditItem"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SelectLogin}
          name="SelectLogin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserLogin}
          name="UserLogin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserSignup}
          name="UserSignup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Cart}
          name="Cart"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Checkout}
          name="Checkout"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Address}
          name="Address"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={OrderHistory}
          name="OrderHistory"
          options={{headerShown: false}}
        />
        <Stack.Screen
        component={Payment}
        name="Payment"
        options={{headerShown: false}}
        />
        <Stack.Screen
        component={PaymentSuccess}
        name="PaymentSuccess"
        options={{headerShown: false}}
        />
        <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
        />
        <Stack.Screen
        component={EiditProfile}
        name="EiditProfile"
        options={{headerShown: true}}
        />
        <Stack.Screen
        component={QuickBite}
        name="QuickBite"
        />
        <Stack.Screen
        component={OrderTracking}
        name="OrderTracking"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
