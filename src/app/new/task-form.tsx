import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask, updateTask } from "@/actions/task-action-list"

export function TaskForm({task}: {task?: any}) {

    const actionConditional = task?.id ? updateTask : createTask
    
    return (
        <form action={actionConditional}>
            <input type="hidden" name="id" value={task?.id}/>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create Task</CardTitle>
                    <CardDescription>Fill out the from below to create a new task.</CardDescription>
                </CardHeader>
                <CardContent>

                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Name of your task" defaultValue={task?.name} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Description</Label>
                            <Textarea id="description" defaultValue={task?.description} name="description" placeholder="Description of your task" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="priority">Priority</Label>
                            <Select name="priority" defaultValue={task?.priority}>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="urgent">Urgent</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit">{task?.id ? "Edit Task" : "Create Task"}</Button>
                </CardFooter>
            </Card>
        </form>
    )
}