
const { z } = require('zod');

const registerSchema = z.object({
    cargo: z.string().min(1, "Selecione um cargo"),
    nomeCompleto: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
    cpfCnpj: z.string()
        .min(1, "CPF ou CNPJ obrigatório")
        .refine((val) => {
            const numbers = val.replace(/\D/g, "");
            return numbers.length === 11 || numbers.length === 14;
        }, {
            message: "CPF ou CNPJ inválido",
        }),
    email: z.string().email("E-mail inválido"),
    cep: z.string()
        .min(1, "CEP obrigatório")
        .refine((val) => {
            const numbers = val.replace(/\D/g, "");
            return numbers.length === 8;
        }, {
            message: "CEP inválido (deve ter 8 números)",
        }),
    endereco: z.string().min(3, "Endereço obrigatório"),
    numero: z.string().min(1, "Obrigatório"),
    complemento: z.string().optional(),
    uf: z.string().min(1, "Obrigatório"),
    cidade: z.string().min(2, "Cidade obrigatória"),
    bairro: z.string().min(2, "Bairro obrigatório"),
    dddResidencial: z.string().optional(),
    telefoneResidencial: z.string().optional(),
    dddCelular: z.string().min(2, "Obrigatório"),
    telefoneCelular: z.string().min(8, "Obrigatório"),
    genero: z.string().min(1, "Selecione o gênero"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

const defaultValues = {
    cargo: "PDV",
    nomeCompleto: "",
    cpfCnpj: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    uf: "",
    cidade: "",
    bairro: "",
    dddResidencial: "",
    telefoneResidencial: "",
    dddCelular: "",
    telefoneCelular: "",
    genero: "Homem",
    password: "",
    confirmPassword: "",
};

const result = registerSchema.safeParse(defaultValues);
if (!result.success) {
    console.log("Validation failed");
    console.log("Errors:", JSON.stringify(result.error.flatten().fieldErrors, null, 2));
} else {
    console.log("Validation succeeded");
}
