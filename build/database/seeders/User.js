"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class default_1 extends Seeder_1.default {
    async run() {
        await User_1.default.create({
            nama: 'Ramaa',
            telp: '085745726082',
            alamat: 'Jl. KH Hasyim Ashari, Kec Bululawang, Kabupaten Malang, Jawa Timur',
            email: 'aa@gmail.com',
            password: 'aa',
            is_verified: true
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=User.js.map