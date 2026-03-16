import { z } from "zod";

export const minhaContaSchema = z.object({
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
    senhaAtual: z.string().optional().or(z.literal("")),
    novaSenha: z.string().optional().or(z.literal("")),
    confirmarNovaSenha: z.string().optional().or(z.literal("")),
}).refine((data) => {
    // If novaSenha is provided, senhaAtual and confirmarNovaSenha must also be provided
    if (data.novaSenha && data.novaSenha.length > 0) {
        if (!data.senhaAtual || data.senhaAtual.length < 6) return false;
        if (!data.confirmarNovaSenha || data.confirmarNovaSenha.length < 6) return false;
        if (data.novaSenha.length < 6) return false;
        return data.novaSenha === data.confirmarNovaSenha;
    }
    return true;
}, {
    message: "Para alterar a senha, preencha todos os campos corretamente e as senhas devem coincidir",
    path: ["confirmarNovaSenha"],
});

export type MinhaContaFormData = z.infer<typeof minhaContaSchema>;

export const contactSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    cpfCnpj: z.string()
        .min(1, "CPF/CNPJ é obrigatório")
        .refine((val) => {
            const numbers = val.replace(/\D/g, "");
            return numbers.length === 11 || numbers.length === 14;
        }, {
            message: "CPF deve ter 11 dígitos ou CNPJ 14 dígitos",
        }),
    mensagem: z.string().min(1, "Mensagem é obrigatória"),
    arquivo: z.any().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const loginSchema = z.object({
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
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
    confirmPassword: z.string().min(6, "A confirmação de senha é obrigatória"),
    profilePicture: z.any().optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;
