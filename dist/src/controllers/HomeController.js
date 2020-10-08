"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    async index(request, response) {
        try {
            return response.send({ message: 'Hello' });
        }
        catch (err) {
            return response.status(400).json({
                error: 'Erro index class'
            });
        }
    }
    async create(request, response) {
        try {
            return response.send(request.body);
        }
        catch (err) {
            return response.status(400).json({
                error: 'Erro create class and user: '
            });
        }
    }
}
exports.default = HomeController;
