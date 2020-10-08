import {Request, Response} from 'express';

export default class HomeController {
    async index(request: Request, response: Response) {
        try {
            return response.send({message: 'Hello'});
        } catch (err) {
            return response.status(400).json({
                error: 'Erro index class'
            });
        }
    }

    async create(request: Request, response: Response) {
        try {
            return response.send(request.body)

        } catch (err) {
            return response.status(400).json({
                error: 'Erro create class and user: '
            });
        }
    }
}