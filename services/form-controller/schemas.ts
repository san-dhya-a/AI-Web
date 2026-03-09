import { z } from "zod";

export const minhaContaSchema = z.object({
    cargo: z.string().min(1, "Selecione um cargo"),
    nomeCompleto: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
    cpfCnpj: z.string().min(14, "CPF ou CNPJ inválido"),
    email: z.string().email("E-mail inválido"),
    cep: z.string().min(9, "CEP inválido"),
    endereco: z.string().min(3, "Endereço obrigatório"),
    numero: z.string().min(1, "Obrigatório"),
    complemento: z.string().optional(),
    uf: z.string().min(1, "Obrigatório"),
    cidade: z.string().min(2, "Cidade obrigatória"),
    bairro: z.string().min(2, "Bairro obrigatório"),
    dddResidencial: z.string().optional(),
    telefoneResidencial: z.string().optional(),
    dddCelular: z.string().min(2, "Obrigatório"),
    telefoneCelular: z.string().min(9, "Obrigatório"),
    genero: z.string().min(1, "Selecione o gênero"),
    senhaAtual: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    novaSenha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmarNovaSenha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
}).refine((data) => data.novaSenha === data.confirmarNovaSenha, {
    message: "As senhas não coincidem",
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
});

export type ContactFormData = z.infer<typeof contactSchema>;
