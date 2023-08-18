import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import Post from '../components/post'
import Curso from '../components/curso'
import styles from '../styles/grid.module.css'

export default function Home({guitarras,posts,curso}) {
  console.log(curso)
  return (
    <>
      <Layout
         title = {'Inicio'}
         description = {'Blog de Música, venta de guitarras y más'}
         >
          <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <div className={styles.grid}>
              {guitarras.map( guitarra => (
                <Guitarra
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
              ))}
            </div>

          <Curso
            curso={curso.attributes}
          /> 

          </main>
          <section className='contenedor'>
            <h2 className='heading'>Blog</h2>
            <div className={styles.grid}>
                {posts.map( post => (
                  <Post
                    key={post.id}
                    post={post.attributes}
                  />
                ))}
            </div>
          </section>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras=`${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost=`${process.env.API_URL}/posts?populate=imagen`
  const urlCurso=`${process.env.API_URL}/curso?populate=imagen`

  const[respGuitarras,respPost,respCurso]= await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ])

  const[{data:guitarras},{data:posts},{data:curso}]= await Promise.all([
    respGuitarras.json(),
    respPost.json(),
    respCurso.json()

  ])

  return{
    props:{
      guitarras,
      posts,
      curso
    }
  }
}
