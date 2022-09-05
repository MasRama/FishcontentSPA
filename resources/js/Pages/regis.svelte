<script>
    import { Inertia } from '@inertiajs/inertia'
    import { inertia } from '@inertiajs/inertia-svelte'
    import { onMount } from 'svelte';
    import { HandleRegist } from '../scripts/regis'

    let nama, telp, email, password, kdpos, jalan;

    let prov = []
    let kec = []
    let kab = []

    const prealamat ={
        prov : '',
        kab : '',
        kec : '',
    }

    function titleCase(str) {
        var splitStr = str?.toLowerCase().split(' ');
        for (var i = 0; i < splitStr?.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
   // Directly return the joined string
         return splitStr?.join(' '); 
        }

    $:alamatparsed = {
        provinsi : titleCase((prov.length  && prov.find(e => e.id === prealamat.prov))?.name?.toLowerCase()),
        kabupaten : titleCase((kab.length && kab.find(e => e.id === prealamat.kab))?.name?.toLowerCase()),
        kecamatan : titleCase((kec.length && kec.find(e => e.id === prealamat.kec))?.name?.toLowerCase()),
    }

    $:alamat = `${jalan}, Kec ${alamatparsed.kecamatan}, ${alamatparsed.kabupaten}, ${alamatparsed.provinsi}, ${kdpos}`

    
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',{cache : 'no-cache'})
    .then(r => r.json())
    .then(r => {
        prov = r.sort( (p,n) => p.name.localeCompare(n.name))
    }); 

    const provChange = ({target}) => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${target.value}.json`,{cache : 'no-cache'})
    .then(r => r.json())
    .then(r => kab = r.sort( (p,n) => p.name.localeCompare(n.name)))
    }

    const ctChange = ({target}) =>{
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${target.value}.json`,{cache : 'no-cache'})
    .then(r => r.json())
    .then(r => kec = r.sort((p,n) => p.name.localeCompare(n.name)))
    }

    function handleSubmit() {
      Inertia.post('/regis', {nama, telp, alamat, email, password})
    }

    onMount(async () => {
        HandleRegist()
  });

  </script>
  
  <body class=" bg-login bg-cover font-poppins ">
    <header class="">
      <nav class="">
        <div class="container relative flex justify-between lg:justify-end mx-auto py-6 ">
          <a class="flex items-center gap-4" use:inertia href="/">
            <img
              src="images/icon.png"
              alt="logo"
              class="max-w-[3rem] rounded-md"
            />
            <span class="text-base text-black max-w-[7rem] md:text-lg md:max-w-max lg:text-2xl uppercase font-bold">fishcontent indonesia</span>
          </a>
        </div>
      </nav>
    </header>
    <main class="w-full min-h-[85vh] my-16 sm:my-0 flex items-center justify-center">
        <div class="w-11/12  max-w-lg lg:max-w-screen-2xl flex flex-col gap-6  lg:gap-0 mx-auto  justify-center lg:flex-row lg:justify-between  ">
            <div class=" basis-2/5 md:mt-16 lg:mt-[7%]">
                <h2 class="text-center text-xl mb-5 sm:text-2xl md:text-3xl md:leading-normal lg:text-3xl lg:leading-normal xl:leading-[1.5] lg:text-left xl:text-4xl">Jadilah bagian dari FishContent Indonesia untuk menikmati fasilitas yang ada.</h2>
                <p class="text-lg hidden lg:block font-medium opacity-100">Sudah memiliki akun ?, login <a class="text-blue-700" use:inertia href="./login"> disini!</a></p>
            </div>
            <div class="basis-[45%]">
                <form on:submit|preventDefault={handleSubmit}>
                    <div class="flex flex-col sm:flex-row   gap-2 lg:gap-8">
                        <div class=" basis-1/2 relative mb-2">
                            <label for="name-in" class="text-base block lg:text-lg font-medium mb-1">Nama</label>
                            <input type="text" bind:value="{nama}" name="Nama"  class="input"  id="name-in"  >
                            <small class="mt-2 text-red-600 hidden validate"></small>
                        </div>
                        <div class="basis-1/2  relative mb-2">
                            <label for="telp-in" class="text-base block lg:text-lg font-medium mb-1">Telepon</label>
                            <input type="tel" name="Telp" bind:value="{telp}"  placeholder="08"  class="input"  id="telp"  >
                            <small class="text-red-600 mt-2 hidden validate"></small>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row   gap-2 lg:gap-8">
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="email-in" class="text-base block lg:text-lg font-medium mb-1">Email</label>
                            <input type="email" name="Email" bind:value="{email}"  class="input" id="email" >
                            <small class="mt-2 text-red-600 hidden validate"></small>
                        </div>
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="prov-in" class="text-base block lg:text-lg font-medium mb-1">Provinsi</label>
                            <select name="Provinsi" on:change={provChange} bind:value={prealamat['prov']} class="input"  id="prov"  >
                                <option value="" disabled selected >Pilihan Provinsi</option>
                                {#each prov as p (p.id)}
                                    <option value={p.id}>{p.name}</option>
                                {/each}
                            </select>
                            <small class="text-red-600 mt-2 hidden validate"></small>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-2 lg:gap-8">
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="kab-in" class="text-base block lg:text-lg font-medium mb-1">Kabupaten</label>
                            <select name="Kabupaten / Kota" on:change={ctChange} bind:value={prealamat['kab']}  class="input" id="kab" >
                                <option value="" disabled selected >Pilihan Kabupaten / Kota</option>
                                {#each kab as k (k.id)}
                                    <option value={k.id}>{k.name}</option>
                                {/each}
                            </select>
                            <small class="text-red-600 mt-2 hidden validate"></small>
                        </div>
                        
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="kel-in" class="text-base block lg:text-lg font-medium mb-1">Kecamatan</label>
                            <select name="Kecamatan" bind:value={prealamat['kec']}  class="input" id="kel"  >
                                <option value="" selected disabled >Pilihan Kecamatan</option>
                                {#each kec as kc (kc.id)}
                                    <option value={kc.id}>{kc.name}</option>
                                {/each}
                            </select>
                            <small class="text-red-600 mt-2 hidden validate"></small>
                        </div>
                        
                    </div>
                    <div class="flex flex-col sm:flex-row gap-2 lg:gap-8">
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="detail-in" class="text-base block lg:text-lg font-medium mb-1">Detail</label>
                            <input type="text" name="Detail" bind:value={jalan}  class="input"  id="detail" >
                            <small class="mt-2 text-red-600 hidden validate"></small>
                        </div>
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="postC-in" class="text-base block lg:text-lg font-medium mb-1">Kode pos</label>
                            <input type="zip" name="Kode pos" bind:value="{kdpos}"  class="input"  id="postC" >
                            <small class="mt-2 text-red-600 hidden validate"></small>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-2 lg:gap-8">
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="password-in" class="text-base block lg:text-lg font-medium mb-1">Password</label>
                            <input type="password" name="Password" bind:value="{password}" class="input"  id="pasword"   >
                            <button class="absolute top-10 right-2.5 text-slate-400 hover:text-slate-800 "><i class="fa-solid fa-eye"></i></button>
                            <small class="text-red-600 mt-2 hidden validate"></small>
                        </div>
                        <div class="basis-1/2  relative mb-2 ">
                            <label for="passwordConfirm-in" class="text-base block lg:text-lg font-medium mb-1">Konfirmasi Password</label>
                            <input type="password" name="Konfirmasi Password" value="" class="input" id="paswordConfir" >
                            <button class="absolute top-10 right-2.5 text-slate-400 hover:text-slate-800 "><i class="fa-solid fa-eye"></i></button>
                            <small class="text-red-600 mt-2 hidden validate">Password tidak sama</small>
                        </div>
                    </div>
                    <input type="submit" value="Buat akun" class="mt-8 btn btn-third w-full">
                    <p class="mt-5 text-base text-center lg:text-left font-medium opacity-100 lg:hidden">Sudah memililki akun ?, login <a class="text-blue-700" href="./login"> disini!</a></p>
                </form>
            </div>  
        </div>
    </main>  
  </body>