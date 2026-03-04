import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    fullWidth = false,
    className = "",
    ...props
}) => {
    const baseStyles =
        "px-6 py-4 font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[#004415] text-white hover:bg-[#003310]",
        secondary: "bg-[#f1f1f1] text-[#333] hover:bg-gray-200",
        outline: "border-2 border-[#004415] text-[#004415] hover:bg-[#004415] hover:text-white",
    };

    const widthStyle = fullWidth ? "w-full" : "w-auto";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
