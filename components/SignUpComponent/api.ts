import api from "@/lib/api-axios"
import type { RegisterInput } from "@/validations/auth.validation"

export default async function apiCall(data: RegisterInput) {

        const response = await api.post("/api/SignUp", data)

        return response
    



}