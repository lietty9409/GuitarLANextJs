import { Html,Head,Main,NextScript} from 'next/document'


export default function Document() {
    return(
        <Html>
            <Head>
                <meta name='description' content='GuitarLA - Venta de guitarras y blog de música'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700
                &family=Roboto:wght@300&family=Ubuntu:ital,wght@1,300&display=swap" rel="stylesheet"/>
                <link  rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/>
            </Head>
            <body>
                <Main/>
                <NextScript/>               
            </body>
        </Html>
    )
}