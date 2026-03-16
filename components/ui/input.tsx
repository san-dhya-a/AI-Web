import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    variant?: "default" | "line";
    labelClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, variant = "default", className = "", labelClassName = "", ...props }, ref) => {
        const baseInputStyles = "w-full focus:outline-none transition-colors text-base";
        const variantStyles = variant === "line"
            ? "bg-transparent border-b border-gray-300 focus:border-[#268200] py-2 px-0"
            : "px-4 py-3 bg-[#f5f5f5] border-b-2 border-transparent focus:border-[#004415]";

        return (
            <div className="flex flex-col w-full">
                <label className={`text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>{label}</label>
                <input
                    ref={ref}
                    suppressHydrationWarning
                    className={`${baseInputStyles} ${variantStyles} ${error ? "border-red-500" : ""} ${className}`}
                    {...props}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
