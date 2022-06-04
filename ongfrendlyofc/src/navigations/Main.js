import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from "../Pages/HomePage";
import CadOngInformacoes from '../Pages/cadOngInformacoes';
import Voluntarios from '../Pages/Voluntarios';
import Atividade from '../Pages/Atividade';
import CadAtividade from '../Pages/CadastrarAtv';
import ListAtividade from '../Pages/ListarAtv';
import TelaInicialOng from '../Pages/telaInicialOng';
import RegAtividade from '../Pages/RegistrarAtv';
import OngLogin from '../Pages/OngLogin';
import OngCadLogin from '../Pages/OngCadLogin'
import DetalhesAtv from '../Pages/DetalhesAtv'
import DetalhesOng from '../Pages/DetalhesOng'

const Stack = createNativeStackNavigator();


const Main = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="CadInformacoesOng" component={CadOngInformacoes} />
            <Stack.Screen name="Voluntarios" component={Voluntarios} />
            <Stack.Screen name="Atividade" component={Atividade} />
            <Stack.Screen name="CadastrarAtividades" component={CadAtividade} />
            <Stack.Screen name="ListarAtividades" component={ListAtividade} />
            <Stack.Screen name="HomeOng" component={TelaInicialOng} />
            <Stack.Screen name="Registrar Atividade" component={RegAtividade} />
            <Stack.Screen name="OngLogin" component={OngLogin} />
            <Stack.Screen name="Ong cadastro Login" component={OngCadLogin} />
            <Stack.Screen name="Detalhe da atividade" component={DetalhesAtv} />
            <Stack.Screen name="DetalhesOng" component={DetalhesOng} />
        </Stack.Navigator>
    );
}

export default Main;