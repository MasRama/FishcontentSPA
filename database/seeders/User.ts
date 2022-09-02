import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
     await User.create({
      nama: 'Ramaa',
      telp: '085745726082',
      alamat: 'Jl. KH Hasyim Ashari, Kec Bululawang, Kabupaten Malang, Jawa Timur',
      email: 'aa@gmail.com',
      password: 'aa',
      is_verified: true
     })
  }
}
