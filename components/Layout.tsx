import React, { PropsWithChildren, FormEvent, ChangeEvent, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import Input from '../components/UI/Input'
import Button from '../components/UI/Button'

import Logo1 from '../public/images/logo.webp'
import Logo2 from '../public/images/logo2.webp'

const Layout = ({ children }: PropsWithChildren) => {
    const [disabled, setDisabled] = useState(true)
    const { pathname } = useRouter()

    let styling = "bg-white text-black"
    let logo = Logo2
    if (pathname === '/') {
        styling = "bg-black/50 text-white"
        logo = Logo1
    }

    const submitHandler = (event: FormEvent) => { }
    const onInputChange = (event: ChangeEvent) => { }

    return (
        <>
            <nav className={`px-20 shadow-xl fixed z-10 w-full ${styling}`}>
                <div className="flex flex-row justify-between items-center h-20">
                    <div className="w-10">
                        <Link href="/">
                            <Image src={logo} alt="logo" width={200} height={20} priority={true} />
                        </Link>
                    </div>
                    <ul className="flex flex-row gap-5 text-xl">
                        <li className={pathname === '/' ? 'active' : ''}>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li className={pathname === '/marketplace' ? 'active' : ''}>
                            <Link href="/marketplace">Marketplace</Link>
                        </li>
                        <li className={pathname === '/blog' ? 'active' : ''}>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className={pathname === '/evaluacion' ? 'active' : ''}>
                            <Link href="/evaluacion">Evaluación</Link>
                        </li>
                        <li className={pathname === '/diagnostico' ? 'active' : ''}>
                            <Link href="/diagnostico">Diagnóstico</Link>
                        </li>
                        <li>
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>

                </div>
            </nav>
            {children}
            <footer className={`flex flex-col justify-between border-t h-96 py-16 ${styling}`} id="contacto">
                <div className="container flex flex-row justify-around">
                    <div className="w-400">
                        <form onSubmit={submitHandler}>
                            <Input
                                label="Suscríbete a nuestro newsletter"
                                type="text"
                                onInputChange={onInputChange}
                                placeholder="ingresa tu correo" />
                            <Button
                                type="button"
                                title="Enviar"
                                textColor="text-white"
                                bgColor="bg-black"
                                hoverBgColor="hover:bg-white"
                                hoverTextColor="hover:text-black"
                                disabled={disabled}
                            />
                        </form>
                    </div>
                    <div className="">
                        <p className="pb-4">Contacto</p>
                        <p>Dirección</p>
                        <p>Teléfono</p>
                        <p>Email</p>
                    </div>
                    <div className="">
                        <p className="pb-4">Recursos</p>
                        <p>Lazo Consultora de Negocios</p>
                        <p>Agricultura Chile</p>
                        <p>Blog</p>
                    </div>
                    <div className="">
                        <p className="pb-4">Empresa</p>
                        <p>Leadership</p>
                        <p>Carreras</p>
                        <p>Política de privacidad</p>
                    </div>
                </div>
                <div className="flex flex-row justify-around ">
                    <div className="flex flex-row  gap-4">
                        <p className="underline">Términos y condiciones</p>
                        <p className="underline">Política de privacidad</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <p className="underline">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer">
                                Facebook
                            </a>
                        </p>
                        <p className="underline">
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noreferrer">
                                Twitter
                            </a>
                        </p>
                        <p className="underline">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer">
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout
