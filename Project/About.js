import {Text,View,Pressable,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuFile = require('./Menu.json');

export const About= ()=>{

    let navigation = useNavigation();

    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>Thank you for downloading the application. Our restaurant, {MenuFile.restaurant_name}, offers a wide variety of meals to meet your taste, made with ingredients of the highest quality.</Text>
        <Text style={styles.aboutText}>Our restaurant is located at {MenuFile.location}. We would be delighted to have you anytime from 03:00PM to 11:00PM. Do not forget about our special offers on Thursdays!</Text>
        <Pressable style={styles.aboutButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.homeButtonText}>Explore Menu</Text>
        </Pressable>
      </View>
    );

}

const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      aboutText: {
        textAlign: 'justify',
        padding: 15,
        fontSize: 17
      },
      aboutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 4,
        backgroundColor: '#ffcc66',
        marginBottom: 15,
        marginTop: 25
      },
      homeButtonText: {
        fontSize: 15
      }
});

export default About;
