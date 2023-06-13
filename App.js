import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useFonts, NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { NavigationContainer } from '@react-navigation/native';
import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Routes from './src/routes';

export default function App() {
  const [loadedFont] = useFonts({
    "NunitoRegular": NunitoSans_400Regular,
    "NunitoSemibold": NunitoSans_600SemiBold,
    "NunitoBold": NunitoSans_700Bold,
    "OpenRegular": OpenSans_400Regular,
    "OpenSemiBold": OpenSans_600SemiBold,
    "OpenBold": OpenSans_700Bold
  });

  if (!loadedFont){
    return <View></View>
  }

  return ( 
    <NavigationContainer>
        <StatusBar backgroundColor={"#FAFFF9"}/>
        <Routes/>
    </NavigationContainer>
  );
}


