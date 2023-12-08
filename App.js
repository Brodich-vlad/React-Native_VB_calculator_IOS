import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'

import { Screen } from './src/screen'
import { THEME } from './src/theme'

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
    async function prepare() {
      try {
     await Font.loadAsync({
				'inter-Light': require('./assets/fonts/Inter-Light.ttf'),
			})
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
	}, []);
	
  if (!isReady) {
    return  <View style={[styles.container]}>
      <ActivityIndicator size="large" color={THEME.BTN_ORANGE} />
  </View>
  }

	return (
	  <Screen />
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});
