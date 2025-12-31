interface ButtonProps {
    className?: string
    variant?: "primary" | "secondary" | "icon" | "outline"
    size?: "sm" | "default"
    children: React.ReactNode
}

export const Button = ({
    className = "",
    variant = "primary",
    size = "default",
    children,
}: ButtonProps) => {
    const base = "flex items-center gap-2 cursor-pointer rounded-full transition-colors"

    const variantClasses = {
        primary: "bg-white text-foreground hover:bg-gray-200",
        secondary: "bg-white/25 text-white hover:bg-white/35",
        outline: "border border-slate-300 hover:bg-slate-200",
        icon: "bg-blue-950 text-white hover:bg-blue-900",
    }

    const sizeClasses = {
        default: "px-6 py-3",
        sm: "px-5 py-2.5 text-sm",
    }

    return (
        <button className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}        >
            {children}
        </button>
    )
}