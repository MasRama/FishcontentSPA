import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Redis from '@ioc:Adonis/Addons/Redis'
import { v4 as uuidv4 } from 'uuid';
import mailSend from '../../../resources/js/scripts/mailSend'

export default class RegisController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('regis')
  }

  public async create({}: HttpContextContract) {}

  public async store({request, inertia}: HttpContextContract) {
    
    await User.create(request.all())
    const uuid = uuidv4()
    await Redis.setex(uuid, 86400, request.input('email'))
    let url = `${request.headers().host }/verify/${uuid}`
    mailSend(request.input('email'), url)

    return inertia.render('login', {success: 'Silahkan cek email anda untuk verifikasi'})
    
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
