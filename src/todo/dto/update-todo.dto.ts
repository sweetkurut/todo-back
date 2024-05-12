import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsNotEmpty()
  readonly title: string;

  @IsBoolean()
  readonly done: boolean;
}
