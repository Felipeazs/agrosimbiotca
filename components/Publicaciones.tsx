import React from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Button from '../components/UI/Button'

import publicaciones from '../public/data/publicaciones.json'

const Publicaciones = () => {
    const navigate = useRouter()

    return (
        <div className="bg-back4 bg-cover">
            <div className="custom-shape-divider-top-1663884187">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="shape-fill"></path>
                </svg>
            </div>

            <div className="container pb-40">
                <p className="text-4xl pb-10">Publicaciones</p>
                <div className="flex flex-row justify-center gap-20">
                    {publicaciones.data.map(p => (
                        <div
                            key={p.id}
                            className={"w-250 mt-10"}>
                            <Image
                                src={p.url}
                                alt={p.titulo}
                                width={200}
                                height={300}
                                className="pb-5 object-cover rounded-md"
                            />
                            <p className="text-end text-sm italic">{p.fecha}</p>
                            <p className="text-xl">{p.titulo}</p>
                            <p className="py-4">{p.bajada}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Publicaciones
