"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Redis_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Redis"));
const uuid_1 = require("uuid");
const mailSend_1 = __importDefault(require("../../../resources/js/scripts/mailSend"));
class RegisController {
    async index({ inertia }) {
        return inertia.render('regis');
    }
    async create({}) { }
    async store({ request, inertia }) {
        await User_1.default.create(request.all());
        const uuid = (0, uuid_1.v4)();
        await Redis_1.default.setex(uuid, 86400, request.input('email'));
        let url = `${request.headers().host}/verify/${uuid}`;
        (0, mailSend_1.default)(request.input('email'), url);
        return inertia.render('login', { success: 'Silahkan cek email anda untuk verifikasi' });
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = RegisController;
//# sourceMappingURL=RegisController.js.map