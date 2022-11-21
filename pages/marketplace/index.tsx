import React, { useState, ChangeEvent, FormEvent } from 'react'

import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Productos from '../../components/productos/Productos'

import productos from '../../public/data/productos.json'
import itemsSelector from '../../public/data/itemsSelector.json'


const Marketplace = () => {
    const [busqueda, setBusqueda] = useState({ residuo: '', contenedor: '' })
    const [displaySearchedProducts, setDisplaySearchedProducts] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [displayErrorMessage, setDisplayErrorMessage] = useState<string>('')

    const { residuo, contenedor } = busqueda
    const prodData = productos.datos
    const selectores = itemsSelector.contenedorItems

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsError(false)
        setErrorMessage('')
        setBusqueda({ ...busqueda, [event.target.name]: event.target.value })
    }

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setDisplayErrorMessage('')

        if (residuo.trim().length === 0) {
            setErrorMessage('Por favor, ingresa el residuo que estas buscando')
            return
        }

        const searchedProduct = prodData.find(prod => prod.residuo === residuo)
        if (searchedProduct === undefined || searchedProduct === null) {
            setIsError(true)
            setDisplayErrorMessage(`El residuo ${residuo} no se encuentra`)
            return
        }

        const searchedContainer = prodData.find(prod => prod.contenedor === contenedor)
        if (searchedContainer === undefined || searchedContainer === null) {
            setDisplayErrorMessage('El residuo se encuentra pero no en el envase o contenedor que buscas. Creemos que los siguientes contenedores te podrían interesar')

            setDisplaySearchedProducts(true)
        }
    }

    return (
        <div className="container py-40">
            <div className='border flex flex-col rounded'>
                <div className='relative flex flex-row justify-between items-center p-20 bg-fifth h-24'>
                    <div className='w-full'>
                        <Input
                            type='text'
                            className='w-full py-4'
                            name='residuo'
                            placeholder='Busca el residuo que necesitas'
                            onInputChange={changeHandler} />
                    </div>

                    <form onSubmit={submitHandler}>
                        <Input
                            type='select'
                            option='selecciona el contenedor'
                            items={selectores}
                            className='absolute right-48 bottom-16'
                            name='contenedor'
                            onSelectChange={changeHandler} />
                        <Button
                            title='Buscar'
                            type='submit'
                            bgColor='bg-white'
                            textColor='text-black'
                            hoverBgColor='hover:bg-secondary'
                            hoverTextColor='hover:text-white'
                            className='absolute right-24 bottom-13'
                            disabled={false} />
                    </form>
                    <p className='absolute top-28 text-red-500'>{errorMessage}</p>
                </div>

                <div className='h-full'>
                    {!isError && displaySearchedProducts &&
                        <p className='font-black text-2xl pt-4 pl-20'>
                            Residuo encontrado: {residuo}
                        </p>}
                    {isError &&
                        <p className='font-black text-2xl pt-4 pl-20'>
                            {displayErrorMessage}
                        </p>}
                    {!isError && displaySearchedProducts &&
                        <p className='text-xl pl-20 pr-40'>
                            {displayErrorMessage}
                        </p>}
                    {!isError && displaySearchedProducts && <Productos items={prodData} />}
                </div>
            </div>

        </div>
    )
}

export default Marketplace
