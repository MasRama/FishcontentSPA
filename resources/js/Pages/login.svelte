<script>
    import { Inertia } from '@inertiajs/inertia'
    import { inertia } from '@inertiajs/inertia-svelte'
    import { onMount } from 'svelte';
    import Toast from '../Components/toast.svelte'
    import {HandleLogin, closeToast, openToast} from '../scripts/login'
    export let error, success, email, password
  
    function handleSubmit() {
      Inertia.post('/login', {email, password})
      openToast()
    }

    onMount(async () => {
        HandleLogin()
  });
  </script>

  <body class=" bg-login bg-cover  font-poppins ">
    <header class="">

        <nav class="">
            <div class="container relative flex justify-between lg:justify-end mx-auto py-6 ">
              <a class="flex items-center gap-4 " use:inertia href="/" >
                <img
                  src="../images/icon.png"
                  alt="logo"
                  class="max-w-[3rem] rounded-md"
                />
                <span class="text-base text-black max-w-[7rem] md:text-lg md:max-w-max lg:text-2xl uppercase font-bold ">fishcontent indonesia</span>
              </a>
            </div>
          </nav>

    </header>
    <main class="w-full min-h-[85vh] flex items-center justify-center">
        <div class="w-11/12  max-w-lg lg:max-w-screen-2xl flex flex-col gap-6 lg:gap-0 mx-auto justify-center lg:flex-row lg:justify-between  ">
            <div class="basis-2/5 lg:mt-[1%]">
                <h2 class="text-center text-2xl mb-5 leading-normal lg:text-left lg:text-3xl xl:text-4xl xl:leading-[1.6] lg:leading-[1.6] ">Jadilah bagian dari FishContent Indonesia untuk menikmati fasilitas yang ada.</h2>
                <p class="text-lg hidden lg:block font-medium opacity-100">Belum memililki akun? lakukan registrasi <a class="text-blue-700" use:inertia href="/regis">disini!</a></p>
            </div>
            <div class="basis-96 ">

                {#if error}
                    <Toast color='red' myText={error} url='https://img.icons8.com/windows/50/minus.png' status='Error' myFunc={closeToast} />
                {:else if success}
                    <Toast color='green' myText={success} url='https://img.icons8.com/external-regular-kawalan-studio/344/external-comment-verify-chat-regular-kawalan-studio-5.png'  status='Berhasil' myFunc={closeToast} />
                {/if}

                <form on:submit|preventDefault={handleSubmit}>
                    <div class="relative mb-5">
                        <label for="email-in" class="text-base block lg:text-lg font-medium mb-1">Masukkan Email</label>
                        <input type="email" bind:value="{email}" name="Email" class="input" id="email"  >
                        <small class="mt-2 text-red-600 hidden validate"></small>
                    </div>
                    <div class="relative mb-2 ">
                        <label for="password required-in" class="text-base block lg:text-lg font-medium mb-1">Masukkan password</label>
                        <input type="password" bind:value="{password}" name="Password" class="input"  id="password" >
                        <button class="absolute top-[2.7rem] right-2.5 text-slate-400 hover:text-slate-800 peer-invalid:bottom-[3.4rem]"><i class="fa-solid fa-eye"></i></button>
                        <small class="text-red-600 mt-2 hidden validate"></small>
                    </div>
                    <a href="/" class="block text-right mb-8 ">lupa password?</a>
                    <input type="submit" value="Login" class="btn btn-third w-full">
                    <p class="mt-5 text-base font-medium opacity-100 lg:hidden">Belum memililki akun ?, lakukan registrasi<a class="text-blue-700" href="./regis.html"> disini!</a></p>
                </form>
            </div>
        </div>
    </main>
  </body>
