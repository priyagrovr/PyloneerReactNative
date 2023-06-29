import React from "react";
import {View, FlatList, StyleSheet} from "react-native";
import BookItem from "../atoms/BookItem";
export default function BookList(props) {

	const {bookList, setBookSelected} = props;
	return (
		<View>
			<FlatList
			    numColumns={2}
				data={bookList}
				renderItem={({item}) => <BookItem item={item} setBookSelected={setBookSelected} />}
				// keyExtractor={(item) => item.id}
				columnWrapperStyle={styles.column}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	column: {
	  flexShrink:1
	},
});