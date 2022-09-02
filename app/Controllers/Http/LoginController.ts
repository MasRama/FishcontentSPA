import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  
  public async home({ inertia, auth }: HttpContextContract) {
    if(auth.user) {
      return inertia.render('home', {isLogin: true})
    }
    return inertia.render('home')
  }

  public async loginPage({ inertia }: HttpContextContract) {
    return inertia.render('login')
  }

  public async login({ request, auth, response, inertia }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)

      if(!auth.user?.is_verified) {
        return inertia.render('login', {error: "Silahkan Verifikasi Email Anda Terlebih Dahulu"})
      }

      return response.redirect('/home')  
         
    } catch {
      return inertia.render('login', {error: "Email/Password Salah, Silahkan Coba Lagi"})
    }

  }

}
