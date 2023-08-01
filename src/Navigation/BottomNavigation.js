import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bundles from '../Screen/Bundles';
import HomeScreen from '../Screen/Home';
import Latest from '../Screen/Latest';
import More from '../Screen/More';
import Usage from '../Screen/Usage';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#8fc320',
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Usage"
        component={Usage}
        options={{
          tabBarLabel: 'Usage',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="data-usage" color={color} size={size} />
            
          ),
          
        }}
      />
      <Tab.Screen
        name="Bundles"
        component={Bundles}
        options={{
          tabBarLabel: 'Bundles',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="CodeSandbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Latest"
        component={Latest}
        options={{
          tabBarLabel: 'Latest',
          tabBarIcon: ({ color, size }) => (
<MaterialCommunityIcons name="domain-plus" color={color} size={size} />          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="table" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;