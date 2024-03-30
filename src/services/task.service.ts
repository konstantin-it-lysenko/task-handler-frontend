import { axiosWithAuth } from "@/api/interceptors"
import { ITaskResponse } from "@/types/task.types"

class TaskService {
    private BASE_URL = '/user/tasks'

    async getTasks() {
        const response = await axiosWithAuth.get<ITaskResponse[]>(this.BASE_URL)

        return response
    }
}

export const taskService = new TaskService()
