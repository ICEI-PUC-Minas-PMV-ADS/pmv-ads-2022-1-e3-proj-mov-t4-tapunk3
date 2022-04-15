import React from 'react';

import { Text, View, BackHandler } from 'react-native'

export function Home() {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}