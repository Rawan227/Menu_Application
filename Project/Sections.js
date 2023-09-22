import { useState } from 'react';
import{Text,StyleSheet,View, ScrollView, TouchableOpacity,Modal,Dimensions,Image} from 'react-native';
import {Items} from './Items';
import logo from './chef.png';

const MenuFile = require('./Menu.json');

const W=Dimensions.get('window').width;
const H=Dimensions.get('window').height;

export const Sections=()=>{

    const [openModal,setOpenModal]=useState(null);

    function renderModal(){
        return(
            <Modal visible={openModal!=null} animationType='none' transparent={false}>
                <View>
                <TouchableOpacity onPress={()=>setOpenModal(null)} >
                    <Text style={{fontSize:30,margin:20}} >
                    &lt;
                    </Text>
                </TouchableOpacity>
                <Items section={MenuFile.menu_sections[openModal]}/>
                </View>
            </Modal>
        )
    }

    return(
<View style={styles.sectionsContainer}> 
    <View style={styles.imgContainer}> 
        <Image 
        source={logo} 
        style={{width:200,height:170,position:'absolute',top:10,margin:'auto'}}
        />
    </View>
    <ScrollView
    showsVerticalScrollIndicator={true}
    >
        {MenuFile.menu_sections.map((section,index)=>{
            return(
                <View key={index}>
                    <TouchableOpacity  style={styles.sectionName} onPress={()=>setOpenModal(index)}>
                        <Text style={{fontSize:20}}>{section.section_name}</Text>
                        <Text style={{fontSize:30,color:'#ffcc66'}}> &gt; </Text>
                    </TouchableOpacity>
                </View>
            )
        })}

        {renderModal()}
    </ScrollView>
</View>
);
}

const styles = StyleSheet.create({
    imgContainer:{
        alignItems:'center',
        backgroundColor:'#ffcc66',
        height:H*0.25,
        width:W*0.9,
        borderRadius:20,
        margin:'auto',
    },
    sectionsContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    sectionName: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBlockColor:'rbga(0,0,0,0.1)',
        borderWidth:1,
        width:W * 0.9,
        height:50,
        margin:10,
        padding:3,
        fontSize: 40,
        textAlign:'center',
        borderRadius: 10,
    },
    dotsContainer:{
        alignSelf:'center',
        padding:10,
    }
});

export default Sections;
