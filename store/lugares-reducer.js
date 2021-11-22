import Lugar from "../modelo/Lugar";
import { ADD_LUGAR } from "./lugares-actions"

const estadoInicial = {
    lugares: []
}

export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_LUGAR:
            const lugar = new Lugar (new Date().toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagem)
            return {
                lugares: [lugar, ...estado.lugares]
            }
        default:
            return estado
    }
}