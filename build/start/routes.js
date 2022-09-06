"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', 'LoginController.home');
Route_1.default.get('/edukasi', async ({ inertia, auth }) => {
    if (auth.user) {
        return inertia.render('edukasi', { isLogin: true });
    }
    return inertia.render('edukasi');
});
Route_1.default.get('/sharing', async ({ inertia, auth }) => {
    if (auth.user) {
        return inertia.render('sharing', { isLogin: true });
    }
    return inertia.render('sharing');
});
Route_1.default.get('/login', 'LoginController.loginPage');
Route_1.default.post('/login', 'LoginController.login');
Route_1.default.resource('regis', 'RegisController');
Route_1.default.resource('verify', 'VerifsController');
Route_1.default.group(() => {
    Route_1.default.get('/home', async ({ inertia }) => {
        return inertia.render('dashboard');
    });
    Route_1.default.post('/logout', async ({ auth, response }) => {
        await auth.use('web').logout();
        response.redirect('/login');
    });
}).middleware('auth');
//# sourceMappingURL=routes.js.map