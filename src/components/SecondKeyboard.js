import React from "react"
import { View, StyleSheet, Image } from 'react-native'
import { AppButton } from "./AppButton"
import { THEME } from "../theme"

import { COS, COSH, EE_X, SIN, SINH, TAN, TANH, X_Y_DEGREE, Y_ROOT_X } from "../store/constants"
import useScreenWidthSlice from "../store/useScreenWidthSlice"
import useCalc from "../store/useCalc"

export function SecondKeyboard() {
	// Змінні стейту стилів.
	const styleApp = useScreenWidthSlice(state => state.styleApp);
	// Змінні стейту калькулятора.
	const memoryRes = useCalc(state => state.memoryRes);
	const operator = useCalc(state => state.operator);
	const rad = useCalc(state => state.rad);
	const twoNDmode = useCalc(state => state.twoNDmode);
	const openParenthese = useCalc(state => state.openParenthese);
	const closeParenthese = useCalc(state => state.closeParenthese);

	const memoryClear = useCalc(state => state.memoryClear);
	const memoryAdd = useCalc(state => state.memoryAdd);
	const memoryMinus = useCalc(state => state.memoryMinus);
	const memoryEqual = useCalc(state => state.memoryEqual);
	const twoND = useCalc(state => state.twoND);

	const xSecondDegree = useCalc(state => state.xSecondDegree);
	const xThirdDegree = useCalc(state => state.xThirdDegree);
	const xYDegree = useCalc(state => state.xYDegree);
	const exponent = useCalc(state => state.exponent);
	const x10YDegree = useCalc(state => state.x10YDegree);

	const oneX = useCalc(state => state.oneX);
	const sqrtRoot = useCalc(state => state.sqrtRoot);
	const cubeRoot = useCalc(state => state.cubeRoot);
	const yRoot = useCalc(state => state.yRoot);
	const logX = useCalc(state => state.logX);

	const log10X = useCalc(state => state.log10X);
	const factorialX = useCalc(state => state.factorialX);
	const xSinCosTan = useCalc(state => state.xSinCosTan);
	const eNapier = useCalc(state => state.eNapier);
	const eeX = useCalc(state => state.eeX);

	const radX = useCalc(state => state.radX);
	const xSinhCoshTanh = useCalc(state => state.xSinhCoshTanh);
	const getPi = useCalc(state => state.getPi);
	const randNum = useCalc(state => state.randNum);

	// Об'ект кнопок додаткової клавіатури.
	const secondBtns = [
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				openParenthese();
			},
			content: '('
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				closeParenthese();
			},
			content: ')'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				memoryClear();
			},
			content: 'mc'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				memoryAdd();
			},
			content: 'm+'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				memoryMinus();
			},
			content: 'm-'
		},
		{
			styleBtn: memoryRes.length === 0 ? { backgroundColor: THEME.BTN_SECOND } : { backgroundColor: THEME.BTN_ACTIVE },
			onPress: () => {
				memoryEqual();
			},
			content: 'mr'
		},
		{
			styleBtn: twoNDmode ? { backgroundColor: THEME.BTN_ACTIVE } : { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				twoND();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_2.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSecondDegree();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_3.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xThirdDegree();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_4.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7 }}
				/>
			),
			img: true
		},
		{
			styleBtn: operator === X_Y_DEGREE ? { backgroundColor: THEME.BTN_ACTIVE } : { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xYDegree();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_5.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				exponent();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_6.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				x10YDegree();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_7.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				oneX();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_8.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 9, height: styleApp.mainBtnTxt.fontSize - 10 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				sqrtRoot();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_9.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 8, height: styleApp.mainBtnTxt.fontSize - 8 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				cubeRoot();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_10.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 8, height: styleApp.mainBtnTxt.fontSize - 8 }}
				/>
			),
			img: true
		},
		{
			styleBtn: operator === Y_ROOT_X ? { backgroundColor: THEME.BTN_ACTIVE } : { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				yRoot();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_11.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 8, height: styleApp.mainBtnTxt.fontSize - 8 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				logX();
			},
			content: 'ln'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				log10X();
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_12.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 1, height: styleApp.mainBtnTxt.fontSize - 8 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				factorialX();
			},
			content: 'x!'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSinCosTan(SIN);
			},
			content: 'sin'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSinCosTan(COS);
			},
			content: 'cos'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSinCosTan(TAN);
			},
			content: 'tan'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				eNapier();
			},
			content: 'e'
		},
		{
			styleBtn: operator === EE_X ? { backgroundColor: THEME.BTN_ACTIVE } : { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				eeX();
			},
			content: 'EE'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				radX();
			},
			content: rad ? 'Deg' : 'Rad'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSinhCoshTanh(SINH);
			},
			content: 'sinh'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSinhCoshTanh(COSH);
			},
			content: 'cosh'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				xSinhCoshTanh(TANH);
			},
			content: 'tanh'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				getPi();
			},
			content: 'π'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				randNum();
			},
			content: 'Rand'
		}
	];

	return (
		<View style={[styles.buttonSecondWrap, styleApp.buttonSecondWrap]}>
			{secondBtns.map((el, i) => {
				return (
					<AppButton
						key={i * 10}
						appOnPress={el.onPress}
						styleBtn={el.styleBtn ? { ...el.styleBtn, ...styleApp.mainBtn } : { ...styleApp.mainBtn }}
						styleTxt={
							el.styleTxt
								? { ...el.styleTxt, fontSize: styleApp.mainBtnTxt.fontSize - 10 }
								: { fontSize: styleApp.mainBtnTxt.fontSize - 10 }
						}
					>
						{el.content}
					</AppButton>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	buttonSecondWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		gap: 10
	}
});