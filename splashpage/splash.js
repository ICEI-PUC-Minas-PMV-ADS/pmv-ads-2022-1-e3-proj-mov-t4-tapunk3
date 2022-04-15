import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

export function splash() {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={require('./assets/splash-screen.json')}
                autoPlay
                loop={false}
                onAnimationFinish={()=> navigation.navigate('Home')}
            />
        </View>
    )
}