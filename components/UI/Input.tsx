import React, { ChangeEvent } from 'react'

interface InputProps {
    label: string
    type: string
    name?: string
    option?: string
    placeholder: string
    items?: {
        id: string
        value: string
        nombre: string
    }[]
    className?: string
    onInputChange?: (event: ChangeEvent) => void
    onSelectChange?: (event: ChangeEvent) => void
}

const Input = ({ ...props }: InputProps) => {
    return (
        <div className="flex flex-col py-2">
            <label>{props.label}</label>
            {props.type === 'text' && (
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={props.onInputChange}
                    className={`w-full text-black border shadow-sm rounder p-2 focus:outline-none focus:border-primary
                    focus:ring-1 focus:ring-violet-300 ${props.className}`}
                />
            )}
            {props.type === 'textarea' && (
                <textarea
                    rows={5}
                    name={props.name}
                    onChange={props.onInputChange}
                    className="w-96 text-black border shadow-sm rounded p-2 focus:outline-none focus:border-primary
                    focus:ring-1 focus:ring-violet-300"
                />
            )}
            {props.type === 'select' && (
                <select
                    className={`w-auto text-black border shadow-sm rounded p-2 focus:outline-none focus:border-primary
                    focus:ring-1 focus:ring-violet-300`}
                    name={props.name}
                    onChange={props.onSelectChange}>
                    <option value="">{props.option}</option>
                    {props.items!.map(item => (
                        <option
                            key={item.id}
                            value={item.value}>
                            {item.nombre}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}

export default Input
