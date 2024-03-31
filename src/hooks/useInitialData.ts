'use client'

import { useEffect } from "react"
import { useProfile } from "./useProfile"
import { UseFormReset } from "react-hook-form"
import { TypeUserForm } from "@/types/auth.types"

export function useInitialData(reset: UseFormReset<TypeUserForm>) {
    const { data, isSuccess } = useProfile()

    useEffect(() => {
        if (isSuccess && data) {
            reset({
                email: data.user.email,
                name: data.user.name
            })
        }
    }, [isSuccess])
}
