import Layout from "../components/layout"
import Link from "next/link"


export default function Pagina404() {
  return (
    <Layout
    title='Página no encontrada'>
      <p className="error">Página no encontrada</p>
      <Link href='/'>
        <a className="error-enlace">
            Ir a Inicio
        </a>
      </Link>
    </Layout>
  )
}

