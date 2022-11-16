import React from 'react'

interface ButtonProps {
    title: string
    type: "button" | "submit" | "reset"
    textColor?: string
    bgColor?: string
    hoverBgColor: string
    hoverTextColor: string
    disabled?: boolean
    className?: string
    clickHandler?: () => void
}

const Button = ({ ...props }: ButtonProps) => {
    const { title, type, textColor, bgColor, hoverBgColor, hoverTextColor, disabled, className, clickHandler } = props

    let styling = `border py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1
        focus:ring-offset-sky-900`

    if (!disabled) {
        styling += ` ${hoverBgColor} ${hoverTextColor} ${textColor} ${bgColor}`
    } else {
        styling += ` bg-slate-200 text-white hover:cursor-not-allowed`
    }
    return (
        <div className={`py-2 ${className}`}>
            <button
                type={type}
                onClick={clickHandler}
                disabled={disabled}
                className={styling}>
                {title}
            </button>
        </div>
    )
}

export default Button
