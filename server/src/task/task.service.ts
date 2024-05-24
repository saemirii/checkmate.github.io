import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) {}

    async createTask(dto: TaskDto, userId: string) {
        return this.prisma.task.create({ data: {...dto, createdBy: userId}});   
    }

    async updateTask(dto: TaskDto, id: string){
        return this.prisma.task.update({where: {id}, data: {...dto} })
    }

    async getTask(userId: string){
        return this.prisma.task.findMany({where: {createdBy: userId}})
    }

    async deleteTask(taskId: string){
        return this.prisma.task.delete({where: {id: taskId}})
    }
}