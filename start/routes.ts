/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'LoginController.home')

Route.get('/edukasi', async ({ inertia }) => {
  return inertia.render('edukasi')
})

Route.get('/sharing', async ({ inertia }) => {
  return inertia.render('sharing')
})

Route.get('/login', 'LoginController.loginPage')

Route.post('/login', 'LoginController.login')

Route.resource('regis', 'RegisController')

Route.resource('verify', 'VerifsController')

Route.group(() => {

  Route.get('/home', async ({ inertia }) => {
    return inertia.render('dashboard')
  })

  Route.post('/logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    response.redirect('/login')
  })

}).middleware('auth')


