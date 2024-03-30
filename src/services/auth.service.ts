import { axiosInstance } from '@/api/interceptors';
import { IAuthForm, IAuthResponse } from './../types/auth.types';
import { saveTokenStorage } from './auth-token.service';
export const authService = {
    async main(type: 'login' | 'register', data: IAuthForm) {
        const response = await axiosInstance.post<IAuthResponse>(
            `/auth/${type}`,
            data
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
        
        return response
    }
}
