import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <Layout
        title={'Nosotros'}
        description='Sobre GuitarLA en el blog'>
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src='/img/nosotros.jpg'
              alt="Imagen sobre Nosotros"
              width={1000} 
              height={800}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor fermentum metus gravida,
                eu rutrum odio blandit. In neque nunc, consequat et vestibulum et, mollis quis nibh. Vestibulum in libero
                malesuada dolor dignissim porta eget nec nisl. Aliquam pretium id odio at blandit. Praesent ac quam laoreet,
                euismod libero ac, ultricies sapien.
              </p>
              <p>
                Ut mattis tortor eu est iaculis, a commodo elit tristique.
                In condimentum nulla lectus, quis consectetur nisi facilisis eget. Sed bibendum lacus quis 
                lorem commodo maximus. Maecenas quam metus, vehicula a efficitur eget, scelerisque eu neque.
                Suspendisse pharetra purus ligula. Suspendisse cursus orci nec lectus ornare tincidunt.
                Donec varius nisi neque, sodales finibus arcu feugiat sit amet.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default nosotros
