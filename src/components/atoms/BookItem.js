import React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";

export default function BookItem({item, setBookSelected}) {

	const onPressFunction = (itemData) => {
		setBookSelected(itemData);
	}
	return (
		<>
		<Pressable onPress={() => onPressFunction(item)}>
				<Image
					source={require("../../../assets/default_image.png")}
					// resizeMode="contain"
					style={styles.image}
				></Image>
			<View style={styles.topSection}>
				<View>
					<Text>{item.title}</Text>
				</View>
				<View style={styles.priceSection}>
				<View>
					<Text style={styles.discountRate}>{item.discount_rate}%</Text>
				</View>
				<View style={styles.rightPrice}>
					<Text style={styles.price}>{item.price}원</Text>
				</View>
				</View>
			</View>
		</Pressable>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		display:'flex'
	},
	image: {
		// flex: 1,
		// justifyContent: "center",
		width: 200,
	},
	discountRate:{
		color:'red',
		fontWeight:700,
		// display:'flex',
		// alignItems:'flex-start',
        alignSelf:'flex-start',
		paddingTop:10,
	},
	topSection: {
        display: 'flex',
		// justifyContent: "space-between",
		width: '100%',
		backgroundColor: "#fff",
		padding: 10,
	},
	price: {
        alignSelf:'flex-end',
		fontWeight: 700,
		color:'#080A0C',
		
	},
	priceSection: {
		flexDirection: 'row',
        flex: 1,
        width:200,
        justifyContent: 'space-between',
        textAlign:'center',
		paddingHorizontal:10,
	},
	// dPrice: {
	// 	// width: '50%', 
	// 	alignSelf:'flex-start'
	// },
	rightPrice: {
		paddingTop:8,
	}
});
