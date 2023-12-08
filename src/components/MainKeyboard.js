import React from "react"
import { View, StyleSheet, Image } from 'react-native'

import { AppButton } from "./AppButton"
import Ionicons from '@expo/vector-icons/Ionicons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import { THEME } from "../theme";
import { ADD, DIVIS, MINUS, MULT } from "../store/constants"
import useScreenWidthSlice from "../store/useScreenWidthSlice"
import useCalc from "../store/useCalc"

export function MainKeyboard() {
	// Змінна стейту стилів.
	const styleApp = useScreenWidthSlice(state => state.styleApp);
	// Змінні стейту калькулятора.
	const result = useCalc(state => state.result);
	const operator = useCalc(state => state.operator);
	const twoNDmode = useCalc(state => state.twoNDmode);
	const twoNDmodeRes = useCalc(state => state.twoNDmodeRes);

	const inputNum = useCalc(state => state.inputNum);
	const negativPositivNum = useCalc(state => state.negativPositivNum);

	const divis = useCalc(state => state.divis);
	const mult = useCalc(state => state.mult);
	const minus = useCalc(state => state.minus);
	const add = useCalc(state => state.add);
	const equal = useCalc(state => state.equal);
	const percentage = useCalc(state => state.percentage);

	const clearResult = useCalc(state => state.clearResult);
	const clearAll = useCalc(state => state.clearAll);

	const mainBtns = [
		{
			styleBtn: { backgroundColor: THEME.BTN_GRAY },
			styleTxt: { color: THEME.BLACK_MAIN, fontSize: styleApp.mainBtnTxt.fontSize - 5 },
			onPress: twoNDmode
				? twoNDmodeRes.length === 0
					? () => {
							clearAll();
					  }
					: () => {
							clearResult();
					  }
				: result.length === 0
				? () => {
						clearAll();
				  }
				: () => {
						clearResult();
				  },
			content: twoNDmode ? (twoNDmodeRes.length === 0 ? 'AC' : 'C') : result.length === 0 ? 'AC' : 'C'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_GRAY, fontSize: styleApp.mainBtnTxt.fontSize - 4 },
			styleTxt: { color: THEME.BLACK_MAIN },
			onPress: () => {
				negativPositivNum();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_1.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 3, height: styleApp.mainBtnTxt.fontSize - 3 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_GRAY },
			styleTxt: { color: THEME.BLACK_MAIN, fontSize: styleApp.mainBtnTxt.fontSize - 4 },
			onPress: () => {
				percentage();
			},
			content: '%'
		},
		{
			styleBtn:
				operator === DIVIS
					? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 }
					: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				divis();
			},
			content: (
				<MaterialCommunityIcons color={'rgb(252, 252, 252)'} name="division" size={styleApp.mainBtnTxt.fontSize + 2} />
			),
			img: true
		},
		{
			onPress: () => {
				inputNum('7');
			},
			content: '7'
		},
		{
			onPress: () => {
				inputNum('8');
			},
			content: '8'
		},
		{
			onPress: () => {
				inputNum('9');
			},
			content: '9'
		},
		{
			styleBtn:
				operator === MULT ? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 } : { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				mult();
			},
			content: <AntDesign color={'rgb(252, 252, 252)'} name="close" size={styleApp.mainBtnTxt.fontSize + 2} />,
			img: true
		},
		{
			onPress: () => {
				inputNum('4');
			},
			content: '4'
		},
		{
			onPress: () => {
				inputNum('5');
			},
			content: '5'
		},
		{
			onPress: () => {
				inputNum('6');
			},
			content: '6'
		},
		{
			styleBtn:
				operator === MINUS
					? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 }
					: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				minus();
			},
			content: <Feather color={'rgb(252, 252, 252)'} name="minus" size={styleApp.mainBtnTxt.fontSize + 2} />,
			img: true
		},
		{
			onPress: () => {
				inputNum('1');
			},
			content: '1'
		},
		{
			onPress: () => {
				inputNum('2');
			},
			content: '2'
		},
		{
			onPress: () => {
				inputNum('3');
			},
			content: '3'
		},
		{
			styleBtn:
				operator === ADD ? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 } : { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				add();
			},
			content: <Ionicons color={'rgb(252, 252, 252)'} name="ios-add" size={styleApp.mainBtnTxt.fontSize + 2} />,
			img: true
		},
		{
			styleBtn: {
				...styleApp.mainBtnNull
			},
			onPress: () => {
				inputNum('0');
			},
			content: '0'
		},
		{
			onPress: () => {
				inputNum('.');
			},
			content: ','
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				equal();
			},
			content: (
				<MaterialCommunityIcons color={'rgb(252, 252, 252)'} name="equal" size={styleApp.mainBtnTxt.fontSize + 2} />
			),
			img: true
		}
	];
	return (
		<View style={[styles.buttonWrap, styleApp.buttonWrap]}>
			{mainBtns.map((el, i) => {
				return (
					<AppButton
						key={i * 22}
						appOnPress={el.onPress}
						styleBtn={el.styleBtn ? { ...styleApp.mainBtn, ...el.styleBtn } : { ...styleApp.mainBtn }}
						styleTxt={el.styleTxt ? { ...styleApp.mainBtnTxt, ...el.styleTxt } : { ...styleApp.mainBtnTxt }}
						img={el.img}
					>
						{el.content}
					</AppButton>
				);
			})}
		</View>
	);
}
const styles = StyleSheet.create({
	buttonWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		gap: 10
	},
});