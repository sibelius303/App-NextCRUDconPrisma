"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createTask(formData: FormData) {
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()

    console.log(name, description, priority)

    if (!name || !description || !priority) {
        return
    }

    const newTask = await prisma.task.create({
        data: {
            name: name,
            description: description,
            priority: priority
        }
    })

    console.log(newTask)

    redirect("/")
}

export async function removeTask(formData: FormData){
    const TaskId = formData.get("taskId")?.toString();
    console.log(TaskId)

    if(!TaskId){
        return
    }

    await prisma.task.delete({
        where: {
            id: parseInt(TaskId)
        }
    })

    revalidatePath("/")
}

export async function updateTask(formData: FormData) {
    const id = formData.get("id")?.toString()
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()

    console.log(name, description, priority, id)

    if (!name || !description || !priority || !id) {
        return
    }

    const editTask = await prisma.task.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: name,
            description: description,
            priority: priority
        }
    })

    console.log(editTask)

    redirect("/")
}