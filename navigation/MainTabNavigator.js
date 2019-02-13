import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import CartaoScreen from '../screens/Cartao';
import DinheinhoScreen from '../screens/Dinheiro';
import PrazoScreen from '../screens/Prazo';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


const DinheiroStack = createStackNavigator({
  Dinheiro: DinheinhoScreen,
});

DinheiroStack.navigationOptions = {
  tabBarLabel: 'Dinheiro',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
    />
  ),
};

const CartaoStack = createStackNavigator({
  Cartao: CartaoScreen,
});


CartaoStack.navigationOptions = {
  tabBarLabel: 'Cartão',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'}
    />
  ),
};

const PrazoStack = createStackNavigator({
  Prazo: PrazoScreen,
});

PrazoStack.navigationOptions = {
  tabBarLabel: 'Prazo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-clock' : 'md-clock'}
    />
  ),
};


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Sobre',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : ''}
    />
  ),
};

export default createBottomTabNavigator({
  DinheiroStack,
  CartaoStack,
  PrazoStack,
  SettingsStack,
});
