import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OngLogin from '../Pages/OngLogin';
import OngCadLogin from '../Pages/OngCadLogin';

const Stack = createNativeStackNavigator();


const Auth = () => {

    return (
        <Stack.Navigator initialRouteName="OngLogin">
            <Stack.Screen name="OngLogin" component={OngLogin} />
            <Stack.Screen name="Ong cadastro Login" component={OngCadLogin} />
        </Stack.Navigator>
    );
}

export default Auth;