import { apiController } from "../api-controller";

export const dataHolder = {
    login: async (data: any) => {
        return apiController.post("/auth/login", {
            username: data.email,
            password: data.senha,
        });
    },
};
