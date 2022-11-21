import React, { ReactNode } from 'react'

interface CardProps {
    background?: string
    shadow?: string
    mode?: string
    onClick?: () => void
    className?: string
    children: ReactNode
}
const Card = ({ ...props }: CardProps) => {
    const { background, shadow, mode, onClick, className, children } = props

    return (
        <div
            className={`${background} border rounded-lg ${className} 
                  ${shadow ? `shadow-md ${shadow}` : 'shadow-md'} 
                  ${mode ? `${mode} w-40 h-40 py-5 px-3 text-center justify-between items-center` : 'p-10 mt-10'}`}
            onClick={onClick}>
            {children}
        </div>
    )
}

export default Card
