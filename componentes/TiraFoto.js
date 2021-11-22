import React, { useState } from 'react'
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import Cores from '../constantes/Cores'

const TiraFoto = (props) => {
    const [imagemURI, setImagemURI] = useState()
    const tiraFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        })
        setImagemURI(foto.uri)
        props.onFotoTirada(foto.uri)
    }
    return (
        <View style={styles.principal}>
            <View style={styles.previewDaImagem}>
                {
                    imagemURI ?
                        <Image 
                            style={styles.imagem}
                            source={{uri: imagemURI}}
                        />
                    :

                        <Text>Nenhuma foto</Text>
                }
            </View>
            <Button 
                title="Tirar foto"
                color={Cores.primary}
                onPress={tiraFoto}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
})

export default TiraFoto