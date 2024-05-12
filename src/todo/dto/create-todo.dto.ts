import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  id: number;

  @IsNotEmpty()
  readonly title: string;

  @IsBoolean()
  readonly done: boolean;
}
