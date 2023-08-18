import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"

export default function Producto({guitarra,agregarCarrito}) {
    const[cantidad,setCantidad]= useState(0);

    const {nombre,descripcion,precio,imagen} = guitarra[0].attributes

    const handleSubmit = (e) => {
        e.preventDefault();

        if(cantidad < 1){
            alert('Cantidad no válida')
            return;
        }

        //Creando el objeto de lo que se agregó al carrito para guardarlo en LocalStorage
        const guitarraSeleccionada ={
            id:guitarra[0].id,
            imagen:imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        //Pasando la información desde un estado global en app
        agregarCarrito(guitarraSeleccionada)
    }
    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image
                    src={imagen.data.attributes.url}
                    width={400}
                    height={800}
                    alt={`Imagen guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form 
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                        >
                        <label htmlFor="cantidad"> Cantidad: </label>
                        <select 
                            id="cantidad"
                            onChange={ e => setCantidad(Number(e.target.value))}
                            >
                            <option value='0'> --Seleccione-- </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <input 
                            type="submit"
                            value='Agregar al carrito'
                        />
                        
                    </form>
                </div>
            </div>
        </Layout>
       
    )
    }


export async function getServerSideProps({query:{url}}){
   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
   const {data:guitarra} = await respuesta.json()


   return{
    props:{guitarra}
   }
}