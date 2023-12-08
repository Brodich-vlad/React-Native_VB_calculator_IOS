import React, { useEffect } from "react"
import { View, StyleSheet, Text, Dimensions } from 'react-native'

import { THEME } from "./theme";
import { fontSize, thousandSeparator } from "./functions/functions";

import { MainKeyboard } from "./components/MainKeyboard";
import { SecondKeyboard } from "./components/SecondKeyboard";

import useScreenWidthSlice from "./store/useScreenWidthSlice";
import useCalc from "./store/useCalc";

export function Screen() {
	// Змінна стейту розміру екрана.
	const updateScreen = useScreenWidthSlice(state => state.updateScreen);
	// Змінна стейту стилів.
	const styleApp = useScreenWidthSlice(state => state.styleApp);
	// Змінні стейту калькулятора.
	const result = useCalc(state => state.result);
	const rad = useCalc(state => state.rad);
	const twoNDmode = useCalc(state => state.twoNDmode);
	const twoNDmodeRes = useCalc(state => state.twoNDmodeRes);
	const delEndNum = useCalc(state => state.delEndNum);
	const screen = useScreenWidthSlice(state => state.screen);

	useEffect(() => {
		const update = () => {
			const widthWindow = Dimensions.get('window').width;
			const w = widthWindow > 810 ? 810 : widthWindow;
			updateScreen(w);
		};
		const screenListener = Dimensions.addEventListener('change', () => {
			update();
		});
		return () => {
			screenListener.remove();
		};
	});

	return (
		<View style={[styles.container, styleApp.container]}>
			<View>
				<View style={styles.screenWrap}>
					<Text style={[styles.textRad, { fontSize: fontSize(result, screen) - 20 }]}>
						{rad && screen > 450 && 'Rad'}
					</Text>
					<Text
						onPress={() => {
							delEndNum();
						}}
						style={[styles.text, { fontSize: fontSize(result, screen) }]}
					>
						{twoNDmode ? (twoNDmodeRes.length > 0 ? twoNDmodeRes : '0') : thousandSeparator(result)}
					</Text>
				</View>
				<View style={[styles.buttonsWrap]}>
					{screen > 450 ? <SecondKeyboard /> : null}
					<MainKeyboard />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME.BLACK_MAIN,
		alignItems: 'center',
		paddingBottom: 20
	},
	screenWrap: {
		flexDirection: 'row',
		alignItems:'flex-end',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	textRad: {
		fontFamily: 'inter-Light',
		color: THEME.TEXT_COLOR,
		paddingLeft:15
	},
	text: {
		fontFamily: 'inter-Light',
		color: THEME.TEXT_COLOR,
		paddingRight: 15,
	},
	buttonsWrap: {
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'center',
		gap: 10
	},
});
