import React  from "react"
import { View, StyleSheet, TouchableOpacity,Text } from "react-native"
import { THEME } from "../theme"


export function AppButton({ children, appOnPress, styleBtn, styleTxt }) {
  return (
		<TouchableOpacity onPress={appOnPress} activeOpacity={0.7}>
			<View style={[styles.button, styleBtn ]}>
				<Text style={[styles.text, styleTxt ]}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: THEME.BTN_MAIN
	},
	text: {
		color: THEME.TEXT_BTN_COLOR,
		fontFamily: 'inter-Light'
	}
});