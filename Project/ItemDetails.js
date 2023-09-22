import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';
const W=Dimensions.get('window').width;
const H=Dimensions.get('window').height;

export const ItemDetails=({dish})=>{
    return(
    <View style={styles.detailsView}>
        <Image source={{ uri: dish.image_url }} style={styles.img} />
        <View style={styles.text}>
            <Text style={styles.name}>{dish.dish_name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.otherText}>Price: ${dish.price}</Text>
            <Text style={styles.otherText}>Rating: {dish.rating}</Text>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    detailsView: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    text:{
        width: W,
        backgroundColor: '#f7f7f7',
        position:'absolute',
        top: H*0.55,
        zIndex:100,
        borderRadius:30,
        padding:20,
    },
    img: {
        margin:'auto',
        width:W,
        height:H*0.65,
    },
    name: {
        fontSize: 34,
        padding: 4,
        fontStyle: 'italic'
    },
    description: {
        fontSize: 20,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 12,
        textAlign: 'left'
    },
    otherText: {
        fontSize: 18,
        paddingLeft: 4,
        paddingBottom: 12,
    }
});

export default ItemDetails;