import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	Button,
} from "react-native";
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
				<Text style={styles.title}>Title here</Text>
			</View>
			<Image
				source={require("../../../assets/default_image.png")}
				style={styles.image}
			/>
			<View style={styles.bottomSection}>
				<View style={styles.headingContainer}>
					<Text style={styles.subTitle}>Title here</Text>
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
					<Text style={styles.percentage}>10%</Text>
					<Text style={styles.price}>57600</Text>
				</View>
				<View style={styles.commentSec}>
					<View style={styles.middleSec}>
						<Image
							source={require("../../../assets/profile-icon.png")}
							style={styles.UserImg}
						/>
						<Text style={styles.heading}>안녕 나 응애 1일전</Text>
						<Text style={styles.headingB}>1일전</Text>
					</View>
					<View>
						<Text style={styles.para}>
							어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
							아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
							제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
							리뷰 올라온다고 하니 꼭 봐주세용~!
						</Text>
						<View style={styles.paraIcon}>
							<Icon name="heart-o" style={styles.icon} color="#919EB6" />
							<Icon name="comment-o" style={styles.icon} color="#919EB6" />
						</View>
						<View style={styles.bSection}>
							<View style={styles.middleSec}>
								<Image
									source={require("../../../assets/profile-icon2.png")}
									style={styles.UserImg}
								/>
								<Text style={styles.heading}>ㅇㅅㅇ</Text>
								<Text style={styles.headingB}>1일전</Text>
							</View>
							<View style={styles.bsecIcon}>
								<Text style={styles.bsecPara}>
									오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
								</Text>
								<Icon name="heart-o" style={styles.icon} color="#919EB6" />
							</View>
						</View>
					</View>
				</View>
				<View style={styles.inputSec}>
					<Image
						source={require("../../../assets/imagesmode.png")}
						style={styles.inputImg}
					/>
					<TextInput placeholder="댓글을 남겨주세요." />
					<View style={styles.inputButton}><Button
						title="등록"
						color="#AFB9CA"
						// onPress={() => Alert.alert("Simple Button pressed")}
					/></View>
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
		width: "90%",
	},
	descriptionSec: {
		paddingHorizontal: 15,
	},
	description: {
		fontSize: 12,
		fontWeight: 400,
	},
	priceSec: {
		flexDirection: "row",
		justifyContent: "space-between",
		textAlign: "center",
		paddingVertical: 10,
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
		paddingHorizontal: 15,
	},
	commentSec: {
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	middleSec: {
		display: "flex",
		flexDirection: "row",
		paddingVertical: 10,
		gap: 8,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	UserImg: {
		width: 34,
		height: 34,
	},
	topSection: {
		flexDirection: "row",
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#fff",
		padding: 10,
		alignItems: "center",
	},
	BackButton: {
		paddingLeft: 15,
		position: "absolute",
		left: 0,
	},
	title: {
		// paddingLeft: 160,
		fontSize: 18,
		fontWeight: 700,
	},
	bottomSection: {
		paddingHorizontal: 0,
		backgroundColor: "#fff",
	},
	headingContainer: {
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	subTitle: {
		fontSize: 16,
		fontWeight: 700,
	},
	percentage: {
		color: "red",
		fontWeight: 700,
		fontSize: 14,
	},
	price: {
		fontWeight: 700,
		color: "#080A0C",
		fontSize: 14,
	},
	heading: {
		fontWeight: 700,
		color: "#1D232B",
		fontSize: 14,
	},
	para: {
		fontWeight: 400,
		color: "#313B49",
		fontSize: 12,
		paddingLeft: 42,
	},
	paraIcon: {
		paddingLeft: 42,
		display: "flex",
		flexDirection: "row",
		gap: 10,
		paddingVertical: 5,
	},
	bSection: {
		paddingLeft: 42,
	},
	bsecIcon: {
		paddingLeft: 42,
		paddingBottom: 7,
	},
	bsecPara: {
		paddingBottom: 5,
		fontWeight: 400,
		color: "#313B49",
		fontSize: 12,
	},
	headingB: {
		fontWeight: 400,
		color: "#919EB6",
		fontSize: 10,
	},
	inputSec: {
		borderTopColor: "#eee",
		borderTopWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 40,
		display: "flex",
		flexDirection: "row",
		// justifyContent: "space-between",
		alignItems: "center,",
		gap:25,
	},
	inputButton:{
        position:'absolute',
		right:20,
		display:'flex',
		alignSelf:'center',
		flex:1
	},
	inputImg: {
		width: 20,
		height: 20,
	},
});
