import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Control from '../screens/control';
import Feed from '../screens/feed';

export const Tabs = TabNavigator({
  Control: {
    screen: Control,
    navigationOptions: {
      tabBarLabel: 'On/Off',
      tabBarIcon: ({ tintColor }) => <Icon name="switch" size={35} type='entypo' color={tintColor} />
    }
  },
  Feed: {
    screen: Feed, 
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="video-camera" size={35} type='font-awesome' color={tintColor} />
    }
  },
});
