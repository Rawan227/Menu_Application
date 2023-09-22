import {Text,View,Pressable,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const MenuFile = require('./Menu.json');

export const Home= ()=>{

  let navigation = useNavigation();
      
  [fontsLoaded] = useFonts({
    'DancingScript': require('./assets/fonts/DancingScript-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.logo}>{MenuFile.restaurant_name}</Text>
      <Pressable style={styles.homeButton} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.homeButtonText}>Explore Menu</Text>
      </Pressable>
      <Pressable style={styles.homeButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.homeButtonText}>About</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      fontSize: 50,
      fontFamily: 'DancingScript',
      backgroundColor: '#ffcc66',
      alignSelf: 'stretch',
      textAlign: 'center',
      padding: 15,
      marginBottom: 15
    },
    homeButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 5,
      elevation: 4,
      backgroundColor: 'black',
      marginBottom: 15
    },
    homeButtonText: {
      color: 'white',
      fontSize: 15
    }
  });

export default Home;
