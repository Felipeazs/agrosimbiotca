import React from 'react'
import Image from 'next/image'

import Card from '../UI/Card'

interface Item {
    id: string
    residuo: string
    image: string
    contenedor: string
    kilos: string
    proveedor: string
    fecha_publicacion: string
}

interface ProductosProps {
    items: Item[]
}

const Productos = ({ items }: ProductosProps) => {
    const productos = items.map(item => (
        <Card className="flex flex-row mx-auto border-2 border-transparent active:border-2
                hover:shadow-2xl hover:cursos-pointer hover:scale-105 relative" key={item.id}>
            <Image src={item.image} alt={item.residuo} width={200} height={200}/>
        </Card>
    ))

    return (
        <div className="p-10 flex flex-row flex-wrap" >
            {productos}
        </div>
    )
}

export default Productos
