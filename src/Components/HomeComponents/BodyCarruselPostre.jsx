import React, { useEffect, useRef, useState } from 'react'
import torta_De_Limon from '../../assets/torta de llimon.jpg'
import piononos from '../../assets/piononos.jpg'
import alfajores from '../../assets/alfajores.jpg'
import './Body-C-Postre.css'

const Estilos = {
    width: "90%",
    height: "260px",
    borderTopLeftRadius: "5%",
    borderTopRightRadius: "5%",
    borderBottomLeftRadius: "5%",
    borderBottomRightRadius: "5%",
}

const BodyCarruselPostre = ({ claseActiva }) => {

    const imagenRef = useRef()
    const ref = useRef()
    const [Carrusel, setCarrusel] = useState([torta_De_Limon])

    useEffect(() => {
        const arregloImg = [alfajores, piononos, torta_De_Limon];
        let i = 0;

        let contador = setInterval(() => {
            if (arregloImg.length - 1 > i) {
                imagenRef.current.className = 'claseActivaP'
                setTimeout(() => {
                    imagenRef.current.className = 'claseActivaP active'
                    setCarrusel(arregloImg[i]);
                }, 1000);
                setCarrusel(arregloImg[i]);
                i++;
            } else {
                imagenRef.current.className = 'claseActivaP'
                setTimeout(() => {
                    imagenRef.current.className = 'claseActivaP active'
                    setCarrusel(arregloImg[i]);
                }, 1000);
                i = 0;
            }
        }, 4000);
        ref.current.className = 'claseActivaP active'

        return () => {
            return clearInterval(contador)
        };
    }, [claseActiva]);

    return (
        <div className={`claseActivaP`} ref={ref} style={{ paddingLeft: "6%" }}>
            <img
                ref={imagenRef}
                style={Estilos}
                src={Carrusel}
                alt="Torta de Limón"
            />
        </div>
    )
}

export default BodyCarruselPostre