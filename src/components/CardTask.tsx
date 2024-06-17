import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Task } from '@prisma/client';
import TaskDeletedButton from './task-delete-button';
import Link from 'next/link';

function CardTask({task}: {task: Task}){
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
              <CardTitle>
                {task.name}
              </CardTitle>
              <Badge className={
                clsx({
                  "bg-red-500 text-white": task.priority === "high",
                  "bg-yellow-500": task.priority === "medium",
                  "bg-green-500": task.priority === "low",
                  "bg-blue-500 text-white": task.priority === "urgent"
                })
              }>
                {task.priority}
              </Badge>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
              <span className="text-slate-600">{new Date(task.createdAt).toLocaleDateString()}</span>
            </CardContent>
            <CardFooter className="flex w-full gap-x-2 justify-end">
              <TaskDeletedButton taskId={task.id}/>
              <Link className={buttonVariants({variant: "secondary"})} href={`/${task.id}/edit`}>Edit</Link>
            </CardFooter>
          </Card>
    )
}

export default CardTask