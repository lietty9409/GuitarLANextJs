import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const Layout = ({children,title='', description= ''}) => {
  return (
    <div>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name='description' content={description}></meta>
        </Head>
        
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
