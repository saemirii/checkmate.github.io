import { TaskPriority, TaskStatus } from "@prisma/client";
import { IsString, IsEnum, IsMongoId } from "class-validator";

export class TaskDto {
    @IsString()
    title: string
    
    @IsEnum(TaskStatus)
    status: TaskStatus

    @IsEnum(TaskPriority)
    priority?: TaskPriority
}