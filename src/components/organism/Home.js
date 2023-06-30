import React, {useState, useEffect} from "react";
import {StyleSheet, View, FlatList, Text} from "react-native";
import BookList from "../molecules/BookList";
import {API_URL} from "../../constants";
import BookDetail from "../../components/atoms/BookDetail";

export default function Home() {
	const [bookList, setBookList] = useState([]);
	const [bookSelected, setBookSelected] = useState({});

	useEffect(() => {
		fetch(`${API_URL}books`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(async (res) => {
			try {
				const jsonRes = await res.json();
				if (res.status === 200 && jsonRes?.data?.books?.length > 0) {
					setBookList(jsonRes?.data?.books);
				} else {
					setBookList([]);
				}
			} catch (err) {
				console.log(err);
			}
		});
	}, []);
	return (
		<View style={styles.container}>
			{bookSelected !== undefined &&
			bookSelected !== null &&
			bookSelected.hasOwnProperty("id") ? (
				<BookDetail
					bookSelected={bookSelected}
					setBookSelected={setBookSelected}
				/>
			) : (
				<>
					<View style={styles.heading}>
						<Text>자유톡</Text>
					</View>
					<BookList bookList={bookList} setBookSelected={setBookSelected} />
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		marginTop: 50,
		backgroundColor: "#eee",
	},
	heading: {
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "#fff",
		width: "100%",
		alignItems: "center",
	},
});
