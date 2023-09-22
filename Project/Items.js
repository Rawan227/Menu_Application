import { useState } from 'react';
import {View,Text, ScrollView, TouchableOpacity, Modal, StyleSheet,Dimensions }from'react-native';
import {ItemDetails} from'./ItemDetails'

const MenuFile = require('./Menu.json');
const W=Dimensions.get('window').width;
const H=Dimensions.get('window').height;

export const Items = ({section})=>{
    const [openModal,setOpenModal]=useState(null);

    function renderModal(){
        return(
            <Modal visible={openModal!=null} animationType='slide' transparent={false}>
                <View style={styles.popupBackground}>
                <TouchableOpacity onPress={()=>setOpenModal(null)} style={styles.closeBox}>
                    <Text style={styles.closeText}>
                    &lt;
                    </Text>
                </TouchableOpacity>
                <ItemDetails dish={section.dishes[openModal]}/>
                </View>
            </Modal>
        )
    }

    return(
        <View>
            <Text style={styles.sectionName}>{section.section_name}</Text>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            >
            {section.dishes.map((dish,ind)=>{
                return(
                <View key={ind}>
                <TouchableOpacity style={styles.dishName} onPress={()=>{
                    setOpenModal(ind);
                    }}>
                    <View>
                        <Text>
                            {dish.dish_name}
                        </Text>
                        <Text>
                            {dish.price}$
                        </Text>
                    </View>
                    <Text style={{fontSize:30,color:'#ffcc66'}}> &gt; </Text>
                </TouchableOpacity>
                </View>
            )})}
            {renderModal()}
            </ScrollView>
        </View>
    )}

    const styles = StyleSheet.create({
        closeBox: {
            padding:0,
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 30,
            width:45,
            height:45,
            textAlign:'center',
            backgroundColor:'rgba(255, 255, 255, 0.7)',
            position:'absolute',
            top:20,
            left:15,
            zIndex:100,
        },
        closeText: {
            fontSize: 30,
            fontWeight: '500',
            margin:'auto',
        },
        popupBackground: {
            backgroundColor: '#f7f7f7',
            width:W,
            height:H
        },
        dishName: {
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
        sectionName:{
            color:'#ffcc66',
            margin:10,
            fontSize:40
        }
    });

export default Items;