import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BookDetail({bookSelected, setBookSelected}) {
	return (
		<View>
			<View style={styles.topSection}>
				<TouchableOpacity
					style={styles.BackButton}
					onPress={() => {
						setBookSelected({});
					}}
				>
					<Icon name="angle-left" size={30} color="#000" />
				</TouchableOpacity>
				<Text>Title here</Text>
			</View>
			<Image
				source={require("../../../assets/default_image.png")}
				style={styles.image}
			></Image>
			<View style={styles.bottomSection}>
				<View>
					<Text>Title here</Text>
				</View>
				<View style={styles.descriptionSec}>
					<Text style={styles.description}>
						description Description of the book... Lorem Ipsum is simply dummy
						text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled it to make a
						type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially
						unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently
						with desktop publishing software like Aldus PageMaker including
						versions of Lorem Ipsum.
					</Text>
				</View>
				<View style={styles.priceSec}>
					<Text>10%</Text>
					<Text>57600</Text>
				</View>
				<View style={styles.commentSec}>
					<View>
						<Image
							source={require("../../../assets/default_image.png")}
							style={styles.UserImg}
						/>
					</View>
					<Text>안녕 나 응애 1일전</Text>
					<Text>1일전</Text>
					<Text>
						어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
						아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
						기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
						올라온다고 하니 꼭 봐주세용~!
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
	},
	image: {
		width: "100%",
	},
	descriptionSec: {},
	description: {
		fontSize: 14,
	},
	priceSec: {},
	commentSec: {},
	UserImg: {
		width: 20,
		height: 20,
	},
	topSection: {
		flexDirection: "row",
		paddingTop: 20,
		display: "flex",
	},
});
