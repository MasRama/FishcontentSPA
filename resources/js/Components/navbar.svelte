<script>
    import { inertia } from '@inertiajs/inertia-svelte'
    import { onMount } from 'svelte';

    import {Navigation} from '../scripts/navbar'

    onMount(async () => {
        Navigation()
  });
</script>

<nav class="">
    <div class="container relative flex justify-between mx-auto py-6">
      <a class="flex items-center gap-4 " use:inertia href="/">
        <img
          src="images/icon.png"
          alt="logo"
          class="max-w-[3rem] rounded-md"
        />
        <span class="text-base max-w-[7rem] md:text-lg md:max-w-max lg:text-2xl uppercase font-bold">fishcontent indonesia</span>
      </a>
      <div class=" flex lg:hidden items-center">
        <button class="nav__toggler">
            <i class="fa-solid fa-bars text-3xl " ></i>
        </button>
        
      </div>
      <ul class="nav__links rounded-lg hidden absolute top-24 left-0 w-full flex-col gap-6 p-14 bg-white z-50 shadow-2xl lg:static lg:flex lg:p-0 lg:bg-inherit lg:flex-row items-center lg:shadow-none  lg:w-max lg:rounded-none lg:gap-8 xl:gap-12 list-none  ">
        <li><a href="/" use:inertia class="link">beranda</a></li>
        <li><a href="/edukasi" use:inertia class="link">edukasi</a></li>
        <li><a href="/sharing" use:inertia class="link">sharing</a></li>
        <li><a href="/" class="link">belanja</a></li>
        <a href="/login" use:inertia class="btn btn-primary">Login</a>
      </ul>
    </div>
  </nav>