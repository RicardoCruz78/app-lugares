import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import * as lugaresActions from '../store/lugares-actions'
import Cores from '../constantes/Cores'
import { useDispatch } from 'react-redux'
import TiraFoto from '../componentes/TiraFoto'

const NovoLugarTela = (props) => {
    const [novoLugar, setNovoLugar] = useState('')
    const [imagemURI, setImagemURI] = useState()
    const dispatch = useDispatch()
    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto)
    }
    const fotoTirada = (imagemURI) => {
        setImagemURI(imagemURI)
    }

    const adicionarLugar = () => {
        const acao = lugaresActions.addLugar(novoLugar, imagemURI)
        // store.dispatch(acao)
        dispatch(acao)
        setNovoLugar('')
        props.navigation.goBack()

    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.titulo}>Novo lugar</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={novoLugarAlterado}
                    value={novoLugar}
                />
                <TiraFoto
                    onFotoTirada={fotoTirada}
                />
                <Button 
                    title="Salvar Lugar"
                    color={Cores.primary}
                    onPress={() => adicionarLugar()}
                />
            </View>
        </ScrollView>
    )
}

export default NovoLugarTela

const styles = StyleSheet.create({
    form: {
        margin: 40
    },
    titulo: {
        fontSize: 18,
        marginBottom: 12
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 12,
        paddingVertical: 8
    }
})