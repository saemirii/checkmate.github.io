import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { TaskService } from "./task.service";

@Module({
    controllers: [TaskController],
    providers: [PrismaService, TaskService],
    exports: [TaskModule]

})
export class TaskModule {}