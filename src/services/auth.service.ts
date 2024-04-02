import { axiosInstance } from '@/api/interceptors';
import { IAuthForm, IAuthResponse } from './../types/auth.types';
import { removeFromStorage, saveTokenStorage } from './auth-token.service';

export const authService = {
    async main(type: 'login' | 'register', data: IAuthForm) {
        const response = await axiosInstance.post<IAuthResponse>(
            `/auth/${type}`,
            data
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
        
        return response
    },

    async getNewTokens() {
        const response = await axiosInstance.post<IAuthResponse>(
            `/auth/login/access-token`
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
        
        return response
    },

    async logout() {
        const response = await axiosInstance.post<boolean>('/auth/logout')

        if (response) removeFromStorage()
        
        return response
    }
}
