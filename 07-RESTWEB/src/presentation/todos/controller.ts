import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { CustomError, CreateTodo, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo } from '../../domain';


export class TodosController {

  //* DI
  constructor(
    private readonly todoRepository: TodoRepository,
  ) { }

  private handleError = (res: Response, error: unknown) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }

    // grabar log
    res.status(500).json({ error: 'Internal server error - check logs' });
  }

  public getTodos = (req: Request, res: Response) => {

    new GetTodos(this.todoRepository)
      .execute()
      .then(todos => res.json(todos))
      .catch(error => this.handleError(res, error));

  };

  public getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    new GetTodo(this.todoRepository)
      .execute(id)
      .then(todo => res.json(todo))
      .catch(error => this.handleError(res, error));

  };

  public createTodo = (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) return res.status( 400 ).json( { error } );

    new CreateTodo(this.todoRepository)
      .execute(createTodoDto!)
      .then(todo => res.status(201).json(todo))
      .catch(error => this.handleError(res, error));

  };

  public updateTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    if (error) return this.handleError(res, error);

    new UpdateTodo(this.todoRepository)
      .execute(updateTodoDto!)
      .then(todo => res.json(todo))
      .catch(error => this.handleError(res, error));

  };


  public deleteTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    new DeleteTodo(this.todoRepository)
      .execute(id)
      .then(todo => res.json(todo))
      .catch(error => this.handleError(res, error));

  };



} 