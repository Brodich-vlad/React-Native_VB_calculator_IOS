import { create } from "zustand";
import { Dimensions } from 'react-native';
import { updateStyleApp } from "../functions/functions";

 const useScreenWidthSlice = create(set => ({
	screen: Dimensions.get('window').width,
	styleApp: updateStyleApp(Dimensions.get('window').width),
	updateScreen: width =>
    set(()=> ({
			screen: width,
			styleApp: updateStyleApp(width)
		}))
 }));

export default useScreenWidthSlice 
