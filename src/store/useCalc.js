import { create } from 'zustand';
import { negativPositiv, resValid, equalValid, percentageValid, deleteEndNum, deleteModeResEndNum, mathematOperations, factorial, numSinCosTan, getNapier, toRad, toDeg, numSinhCoshTanh} from '../functions/functions';
import { ADD, DIVIS, EE_X, MINUS, MULT, X_Y_DEGREE, Y_ROOT_X } from './constants';

const useCalc = create((set, get) => ({
	argum: null,
	result: '',
	operator: null,
	argumFlag: false,

	memoryRes: '',
	rad: false,
	twoNDmode: false,
	twoNDmodeRes: [],
	openParentFlag: false,

	inputNum: action =>
		set(state => ({
			result: state.result.length < 12 ? resValid(action, state.result, state.argumFlag) : state.result,
			argumFlag: false,
			twoNDmodeRes: state.twoNDmode ? [...state.twoNDmodeRes, action] : []
		})),
	negativPositivNum: () =>
		set(state => ({
			result: negativPositiv(state.result)
		})),
	divis: () =>
		set(state => ({
			operator: DIVIS,
			argum: [...state.result].join(''),
			argumFlag: true,
			twoNDmodeRes: state.twoNDmode ? [...state.twoNDmodeRes, '/'] : []
		})),
	mult: () =>
		set(state => ({
			operator: MULT,
			argum: [...state.result].join(''),
			argumFlag: true,
			twoNDmodeRes: state.twoNDmode ? [...state.twoNDmodeRes, '*'] : []
		})),
	minus: () =>
		set(state => ({
			operator: MINUS,
			argum: [...state.result].join(''),
			argumFlag: true,
			twoNDmodeRes: state.twoNDmode ? [...state.twoNDmodeRes, '-'] : []
		})),
	add: () =>
		set(state => ({
			operator: ADD,
			argum: [...state.result].join(''),
			argumFlag: true,
			twoNDmodeRes: state.twoNDmode ? [...state.twoNDmodeRes, '+'] : []
		})),
	equal: () => set({ ...equalValid(get())}),
	percentage: () => set({ ...percentageValid(get())}),
	delEndNum: () =>
		set(state => ({
			result: deleteEndNum(state.result),
			twoNDmodeRes: deleteModeResEndNum(state.twoNDmodeRes)
		})),
	clearResult: () =>
		set(state => ({
			result: '',
			twoNDmodeRes: deleteModeResEndNum(state.twoNDmodeRes)
		})),
	clearAll: () =>
		set(state => ({
			result: '',
			argum: null,
			operator: null,
			argumFlag: false,
			rad: false,
			twoNDmode: false,
			twoNDmodeRes: []
		})),

	openParenthese: () =>
		set(state => ({
			twoNDmodeRes: state.twoNDmode ? [...state.twoNDmodeRes, '('] : [],
			openParentFlag: true
		})),
	closeParenthese: () =>
		set(state => ({
			twoNDmodeRes: state.openParentFlag ? (state.twoNDmode ? [...state.twoNDmodeRes, ')'] : []) : state.twoNDmodeRes,
			openParentFlag: state.openParentFlag ? false : true
		})),
	memoryClear: () =>
		set(() => ({
			memoryRes: '',
			operator: null,
			argum: null,
			argumFlag: true
		})),
	memoryAdd: () =>
		set(state => ({
			result: mathematOperations(state.argum, state.result, state.operator),
			memoryRes: String(
				Number(state.memoryRes) + Number(mathematOperations(state.argum, state.result, state.operator))
			),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	memoryMinus: () =>
		set(state => ({
			result: mathematOperations(state.argum, state.result, state.operator),
			memoryRes: String(
				Number(state.memoryRes) - Number(mathematOperations(state.argum, state.result, state.operator))
			),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	memoryEqual: () =>
		set(state => ({
			result: state.memoryRes,
			memoryFlag: true
		})),

	twoND: () =>
		set(state => ({
			twoNDmode: !state.twoNDmode,
			twoNDmodeRes: state.twoNDmode ? state.twoNDmodeRes : [],
			result: state.twoNDmode ? '' : state.result,
			operator: null,
			argum: null
		})),
	xSecondDegree: () =>
		set(state => ({
			result: String(Math.pow(Number(state.result), 2)),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	xThirdDegree: () =>
		set(state => ({
			result: String(Math.pow(Number(state.result), 3)),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	xYDegree: () =>
		set(state => ({
			operator: X_Y_DEGREE,
			argum: [...state.result].join(''),
			argumFlag: true
		})),
	exponent: () =>
		set(state => ({
			result: String(Math.exp(Number(state.result))),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	x10YDegree: () =>
		set(state => ({
			result: String(Math.pow(10, Number(state.result))),
			operator: null,
			argum: null,
			argumFlag: true
		})),

	oneX: () =>
		set(state => ({
			result: String(1 / Number(state.result)),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	sqrtRoot: () =>
		set(state => ({
			result: Number(state.result) > 0 ? String(Math.sqrt(Number(state.result))) : 'Error: X < 0',
			operator: null,
			argum: null,
			argumFlag: true
		})),
	cubeRoot: () =>
		set(state => ({
			result: Number(state.result) > 0 ? String(Math.cbrt(Number(state.result))) : 'Error: X < 0',
			operator: null,
			argum: null,
			argumFlag: true
		})),
	yRoot: () =>
		set(state => ({
			operator: Y_ROOT_X,
			argum: [...state.result].join(''),
			argumFlag: true
		})),
	logX: () =>
		set(state => ({
			result: Number(state.result) < 0 ? 'Error: x < 0' : String(Math.log(Number(state.result))),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	log10X: () =>
		set(state => ({
			result: Number(state.result) < 0 ? 'Error: x < 0' : String(Math.log10(Number(state.result))),
			operator: null,
			argum: null,
			argumFlag: true
		})),

	factorialX: () =>
		set(state => ({
			result: factorial(Number(state.result)),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	xSinCosTan: action =>
		set(state => ({
			result: numSinCosTan(action, state.rad, state.result),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	eNapier: () =>
		set(() => ({
			result: String(getNapier()),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	eeX: () =>
		set(() => ({
			operator: EE_X,
			argum: [...state.result].join(''),
			argumFlag: true
		})),

	radX: () =>
		set(state => ({
			rad: !state.rad,
			result: state.result && state.rad ? String(toRad(Number(state.result))) : String(toDeg(Number(state.result)))
		})),
	xSinhCoshTanh: action =>
		set(state => ({
			result: numSinhCoshTanh(action, state.rad, state.result),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	getPi: () =>
		set(() => ({
			result: String(Math.PI),
			operator: null,
			argum: null,
			argumFlag: true
		})),
	randNum: () =>
		set(() => ({
			result: String(Math.random())
		})),
}))

export default useCalc;