import 'react-native-gesture-handler';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Navigation/NavigationContainer';
import MyTabs from './src/Navigation/BottomNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyStack />
  
        </NavigationContainer>    
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
