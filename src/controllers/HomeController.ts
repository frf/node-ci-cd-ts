import {Request, Response} from 'express';

export default class HomeController {
    async index(request: Request, response: Response) {
        try {
            const enviromentTest = process.env.TESTE_ENV;
            return response.send({message: 'Hello Deploy Again', TESTE_ENV: enviromentTest});
        } catch (err) {
            return response.status(400).json({
                error: 'Erro index class'
            });
        }
    }
}