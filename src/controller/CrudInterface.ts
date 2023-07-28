import {Request, Response} from "express";

export interface CrudInterface {
    list(req: Request, res: Response)
    add(req: Request, res: Response)
    edit(req: Request, res: Response)
    delete(req: Request, res: Response)
}
