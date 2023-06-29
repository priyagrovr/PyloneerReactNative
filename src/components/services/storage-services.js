import AsyncStorage from "@react-native-async-storage/async-storage";

//set and get email_id and password
export async function getStorageFunction(key) {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function setStorageFunction(key, data) {
	try {
		await AsyncStorage.setItem(key, data);
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function flushStorageFunction(key) {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		console.log(e);
		throw e;
	}
}
