import {View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Sections} from './Sections';

const MenuFile = require('./Menu.json');

export const Menu= ()=>{
    return(
        <SafeAreaView>
            <View>
                <Sections/>
            </View>
        </SafeAreaView>
    );
}
export default Menu;
