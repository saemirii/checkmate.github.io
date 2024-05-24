import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { TaskService } from "./task.service";
import { User } from "src/user/user.decorator";
import { SanitizedUser } from "src/user/user.types";
import { AuthGuard } from "src/auth/auth.guard";
import { TaskDto } from "./task.dto";


@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
    constructor (private readonly taskService: TaskService) {}

    @Get('task-list')
    getTask(@User() user: SanitizedUser) {
        return this.taskService.getTask(user.id);
    }
    
    @Post('task')
    createTask(@Body() dto: TaskDto, @User() user: SanitizedUser) {
        return this.taskService.createTask(dto, user.id)
    }

    @Put(':id')
    updateTask(@Body() dto: TaskDto,@Param('id') id: string) {
        return this.taskService.updateTask(dto, id)
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        return this.taskService.deleteTask(id);
    }
}