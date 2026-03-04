import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = "", ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-semibold text-gray-700">{label}</label>
                <input
                    ref={ref}
                    className={`px-4 py-3 bg-[#f5f5f5] border-b-2 border-transparent focus:border-[#004415] outline-none transition-colors text-base ${error ? "border-red-500 bg-red-50" : ""
                        } ${className}`}
                    {...props}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
