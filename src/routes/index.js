import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Host} from 'react-native-portalize';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TechnologyScreen from '../pages/Technology';
import ScienceScreen from '../pages/Science';

import logo from '../assets/logotype.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    backBehavior="none"
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => <Icon name="network" size={30} color={focused ? '#000' : '#a7a7a7'} />,
      }}
      name="Technology"
      component={TechnologyScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => <Icon name="lab-flask" size={30} color={focused ? '#000' : '#a7a7a7'} />,
      }}
      name="Science"
      component={ScienceScreen}
    />
  </Tab.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTitle: () => (
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{width: 45}}
                />
              ),
            }}
            name="Home"
            component={Tabs}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}
