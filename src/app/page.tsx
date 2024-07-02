import CardTask from "@/components/CardTask";
import prisma from "@/lib/prisma";

export const dynamics = "force-dynamic"

export default async function Home() {
  const task = await prisma.task.findMany()
  console.log(task)
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        task.map(task => (
          <CardTask key={task.id} task={task}/>
        ))
      }
    </div>
  );
}
