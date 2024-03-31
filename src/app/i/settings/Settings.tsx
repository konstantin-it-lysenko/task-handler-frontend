'use client'

import { Button } from "@/components/ui/buttons/Button"
import { Field } from "@/components/ui/fields/Field"
import { useInitialData } from "@/hooks/useInitialData"
import { useUpdateSettings } from "@/hooks/useUpdateSettings"
import { TypeUserForm } from "@/types/auth.types"
import { SubmitHandler, useForm } from "react-hook-form"

export function Settings() {
    const { register, handleSubmit, reset } = useForm<TypeUserForm>({
        mode: 'onChange'
    })

    useInitialData(reset)

    const { isPending, mutate } = useUpdateSettings()

    const onSubmit: SubmitHandler<TypeUserForm> = data => {
        const { password, ...rest } = data

        mutate({
            ...rest,
            password: password || undefined
        })
    }

    return (
        <div>
            <form
                className="w-2/4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-10">
                    <div>
                        <Field
                            id="email"
                            label="Email:"
                            placeholder="Enter email:"
                            type="email"
                            {...register('email', {
                                required: 'Email is required!'
                            })}
                            extra="mb-4"
                        />

                        <Field
                            id="name"
                            label="Name:"
                            placeholder="Enter name:"
                            {...register('name')}
                            extra="mb-4"
                        />

                        <Field
                            id="password"
                            label="Password:"
                            placeholder="Enter password:"
                            type="password"
                            {...register('password')}
                            extra="mb-10"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isPending}
                >
                    Save
                </Button>
            </form>
        </div>
    )
}
