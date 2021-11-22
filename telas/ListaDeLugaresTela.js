import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import LugarItem from '../componentes/LugarItem'

const ListaDeLugaresTela = (props) => {
    const lugares = useSelector(estado => estado.lugares.lugares)
    return (
        <FlatList 
            data={lugares}
            keyExtractor={lugar => lugar.id}
            renderItem={lugar => (
                <LugarItem 
                    nomeLugar={lugar.item.titulo}
                    imagem={lugar.item.imagemURI}
                    onSelect={() => props.navigation.navigate('DetalhesDoLugar', {
                        tituloLugar: lugar.item.titulo, idLugar: lugar.item.id
                    })}
                />
            )}
        />
    )
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})