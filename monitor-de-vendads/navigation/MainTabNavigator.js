import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import Dinheiro from '../screens/Dinheiro';
import Cartao from '../screens/Cartao';
import Prazo from '../screens/Prazo';

import TelaIncialScreen from '../screens/HomeScreen';
import CartaoScreen from '../screens/Cartao';
import DinheinhoScreen from '../screens/Dinheiro';
import PrazoScreen from '../screens/Prazo';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TelaInicial = createStackNavigator({
  Inicio: TelaIncialScreen,
});

TelaIncialScreen.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

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

const RotasTabMenu = createAppContainer(
  createBottomTabNavigator({
    TelaIncialScreen,
    DinheiroStack,
    CartaoStack,
    PrazoStack,
    SettingsStack,
  })
);

const ConteinerTabs = createAppContainer(RotasTabMenu);

export default class main extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <ConteinerTabs />;
  }
}
