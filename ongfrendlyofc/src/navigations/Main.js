import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from "../Pages/HomePage";
import OngEntrar from '../Pages/OngEntrar';
import Voluntarios from '../Pages/Voluntarios';
import Atividade from '../Pages/Atividade';
import CadAtividade from '../Pages/CadastrarAtv';
import ListAtividade from '../Pages/ListarAtv';
import OngAtividade from '../Pages/OngAtividade';
import RegAtividade from '../Pages/RegistrarAtv';

import OngLogin from '../Pages/OngLogin';
import OngCadLogin from '../Pages/OngCadLogin'

const Stack = createNativeStackNavigator();


const Main = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="OngEntrar" component={OngEntrar} />
            <Stack.Screen name="Voluntarios" component={Voluntarios} />
            <Stack.Screen name="Atividade" component={Atividade} />
            <Stack.Screen name="Cadastrar Atividades" component={CadAtividade} />
            <Stack.Screen name="Listar Atividades" component={ListAtividade} />
            <Stack.Screen name="Ong Atividade" component={OngAtividade} />
            <Stack.Screen name="Registrar Atividade" component={RegAtividade} />
            <Stack.Screen name="OngLogin" component={OngLogin} />
            <Stack.Screen name="Ong cadastro Login" component={OngCadLogin} />
        </Stack.Navigator>
    );
}

export default Main;