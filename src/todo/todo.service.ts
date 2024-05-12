import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const createTodo = this.todoRepository.create(createTodoDto);

    if (createTodo) {
      return {
        message: 'Todo created successfully',
        data: createTodo,
      };
    }

    return await this.todoRepository.save(createTodo);
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    Object.assign(todo, updateTodoDto);

    return await this.todoRepository.save(todo);
  }

  async remove(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    return await this.todoRepository.remove(todo);
  }
}
