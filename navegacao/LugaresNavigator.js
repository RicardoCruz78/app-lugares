import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoCabecalho from '../componentes/BotaoCabecalho'
import Cores from '../constantes/Cores'
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela'
import MapaTela from '../telas/MapaTela'
import NovoLugarTela from '../telas/NovoLugarTela'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="ListaDeLugares"
            //initialRouteName="NovoLugar"
            screenOptions={{
                headerStyle:{backgroundColor: Cores.primary},
                headerTintColor: 'white'
            }}>
            <Stack.Screen 
                name="DetalhesDoLugar" 
                component={DetalhesDoLugarTela}
                options={(props) => ({
                    headerTitle: props.route.tituloLugar
                })}
                />
            <Stack.Screen 
                name="ListaDeLugares" 
                component={ListaDeLugaresTela}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons
                            HeaderButtonComponent={BotaoCabecalho}>
                            <Item 
                               title="Adicionar"
                               iconName="md-add"
                               onPress={() => {
                                    props.navigation.navigate('NovoLugar')
                               }} 
                            />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen name="Mapa" component={MapaTela}/>
            <Stack.Screen name="NovoLugar" component={NovoLugarTela} />
        </Stack.Navigator>   
    </NavigationContainer>
)

export default container