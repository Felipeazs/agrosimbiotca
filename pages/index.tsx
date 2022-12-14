import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/Hero'
import Contacto from '../components/Contacto'
import Publicaciones from '../components/Publicaciones'

import Image1 from '../public/images/agro1.svg'
import Image2 from '../public/images/agro2.svg'
import Image3 from '../public/images/agro3.svg'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Agrosimbiótica</title>
                <meta name="description" content="Agrosimbiótica website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <main className="flex flex-col justify-around text-white bg-black">
                <div className="bg-background_image1 object-cover">

                    <div className="custom-shape-divider-top-1663882523 mt-20">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path
                                d="M1200 0L0 0 598.97 114.72 1200 0z"
                                className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="flex flex-row justify-center items-center"
                        id="how">
                        <div className="w-1/2">
                            <h1 className="text-4xl text-end px-40 pb-6">¿Cómo funciona?</h1>
                            <p className="text-xl text-end px-20 font-Josefin">
                                Si eres productor de residuos orgánicos, deberás ingresar cargando
                                solo el nombre de tu empresa, tu actividad, y que residuos tienes.
                                De esta manera entras a nuestra base de datos para generar
                                conexiones. Si buscas materiales para tus procesos, busca dentro de
                                nuestra oferta lo que necesites, y nosotros te lo llevaremos a dónde
                                estés.
                            </p>
                        </div>
                        <div className="h-96 w-1/2">
                            <Image src={Image1} alt="image 1" />
                        </div>
                    </div>

                    <div className="flex flex-row-reverse justify-center items-center">
                        <div className="w-1/2">
                            <p className="text-2xl text-start p-40">
                                Nuestra plataforma hará la conexión más conveniente entre la oferta
                                y la demanda, para generar sinergia y así ahorrar tiempo, espacio y
                                dinero mejorando el desempeño de tu empresa.
                            </p>
                        </div>
                        <div className="h-96 w-1/2">
                            <Image src={Image2} alt="image 2" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <div className="w-1/2">
                            <p className="text-2xl text-end p-40">
                                Oferta o has tu compra en nuestro Marketplace! Crea tu usuario y así
                                podrás conectar con nuevas posibilidades de negocio, podrás
                                visualizar tus transacciones, los ahorros y el impacto positivo que
                                esté generando en el medio ambiente.
                            </p>
                        </div>
                        <div className="h-96 w-1/2">
                            <Image src={Image3} alt="image 3" />
                        </div>
                    </div>
                </div>
                <Contacto />
                <Publicaciones />
                {  // <Exito />
                }
            </main>
        </div>
    )
}
