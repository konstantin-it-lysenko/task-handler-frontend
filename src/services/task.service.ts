import { axiosWithAuth } from "@/api/interceptors"
import { ITaskResponse, TypeTaskFormState } from "@/types/task.types"

class TaskService {
    private BASE_URL = '/user/tasks'

    async getTasks() {
        const response = await axiosWithAuth.get<ITaskResponse[]>(this.BASE_URL)

        return response
    }

    async createTask(data: TypeTaskFormState) {
        const response = await axiosWithAuth.post(this.BASE_URL, data)

        return response
    }
}

export const taskService = new TaskService()
