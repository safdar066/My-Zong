import { createStackNavigator } from '@react-navigation/stack';
import Map from '../Components/Map';
import OfferSlider from '../Components/OfferSlider';
import PackageSlider from '../Components/PackageSlider';
import HomeScreen from '../Screen/Home';
import MyTabs from './BottomNavigation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabsHome"
      screenOptions={{
        headerShown:false,
        
      }}
    >
        <Stack.Screen
        name="TabsHome"
        component={MyTabs}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Awesome app',
        }}
      />
    <Stack.Screen
        name="OfferSlidera"
        component={OfferSlider}
        options={{
          title: 'My profile',
        }}
      />
       
      <Stack.Screen
        name="PackageSlider"
        component={PackageSlider}
        options={{
          gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="Maps"
        component={Map}
        options={{
          title: 'Maps Screen',
        }}
      />
       
    </Stack.Navigator>
  );
};
export default MyStack;