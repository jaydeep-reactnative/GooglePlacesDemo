import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Navigations} from '../constants';

import MapScreen from '../modules/map/MapScreen';

const BasicStack = createStackNavigator(
  {
    [Navigations.MapScreen]: {screen: MapScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Navigations.MapScreen,
    navigationOptions: {
      backgroundColor: 'white',
    },
  },
);

export default createAppContainer(BasicStack);
