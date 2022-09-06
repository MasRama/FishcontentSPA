"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    async home({ inertia, auth }) {
        if (auth.user) {
            return inertia.render('home', { isLogin: true });
        }
        return inertia.render('home');
    }
    async loginPage({ inertia }) {
        return inertia.render('login');
    }
    async login({ request, auth, response, inertia }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            await auth.use('web').attempt(email, password);
            if (!auth.user?.is_verified) {
                return inertia.render('login', { error: "Silahkan Verifikasi Email Anda Terlebih Dahulu" });
            }
            return response.redirect('/home');
        }
        catch {
            return inertia.render('login', { error: "Email/Password Salah, Silahkan Coba Lagi" });
        }
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map