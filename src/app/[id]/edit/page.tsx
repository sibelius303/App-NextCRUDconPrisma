import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";


const page = async ({params}: {params: {id: string}}) => {
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id)
    }
  })
  return (
    <div className="flex justify-center items-center h-screen">
        <TaskForm task={task}/>
    </div>
  )
}

export default page;