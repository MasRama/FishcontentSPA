<script>
    import { inertia } from '@inertiajs/inertia-svelte'
    import { onMount } from 'svelte';
    import {Cdn} from '../scripts/flowbiteCdn'

    import {Navigation} from '../scripts/navbar'

    export let isLogin

    onMount(async () => {
        Navigation()
        Cdn()
    });
</script>

{#if isLogin}
<nav class="">
  <div class="container relative flex justify-between mx-auto py-6">
    <a class="flex items-center gap-4 " href="/">
      <img
        src="../../images/icon.png"
        alt="logo"
        class="max-w-[3rem] rounded-md"
      />
      <span class="text-base max-w-[7rem] md:text-lg md:max-w-max lg:text-2xl uppercase font-bold ">fishcontent indonesia</span>
    </a>
    <div class=" flex lg:hidden items-center">
      <button class="nav__toggler">
          <i class="fa-solid fa-bars text-3xl " ></i>
      </button>
    </div>
    <ul class="nav__links rounded-lg hidden absolute top-24 left-0 w-full flex-col gap-6 p-14 bg-white z-10 shadow-2xl lg:static lg:flex lg:p-0 lg:bg-inherit lg:flex-row items-center lg:shadow-none  lg:w-max lg:rounded-none lg:gap-8 xl:gap-12 list-none  ">
      <li><a href="/home" use:inertia class="link">beranda</a></li>
      <li><a href="/edukasi" use:inertia class="link ">edukasi</a></li>
      <li><a href="/sharing" use:inertia class="link">sharing</a></li>
      <li><a href="/" use:inertia class="link">belanja</a></li>
       <button
          class="focus:outline-none text-white btn btn-primary hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example">
          Dashboard
      </button>
    </ul>
    <aside id="drawer-right-example" class="rounded fixed z-40 h-screen p-4 overflow-y-auto w-72  bg-login   bg-cover bg-center sm:bg-1.25  bg-no-repeat " tabindex="-1" aria-labelledby="drawer-right-example" >
      <div class="overflow-y-auto py-4 px-3 bg-transparent rounded ">
          <a href="/" class="flex items-center pl-2.5 mb-5">
          <img src="../../images/icon.png" alt="logo" class="mr-5 h-11 sm:h-11 rounded-full" />
          <span class="self-center text-xl font-semibold whitespace-nowrap ">Fishcontent <br />Indonesia</span>
          </a>
          <ul class="space-y-2">
          <li>
              <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Profil</span>
              </a>
          </li>
          <li>
              <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Riwayat Pesanan</span>
              <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
              </a>
          </li>
          <li>
              <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                  ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Toko</span>
              <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Mitra</span>
              </a>
          </li>
          <li>
              <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3">Pengaturan</span>
              </a>
          </li>
          <li>
              <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Kursus</span>
              </a>
          </li>
          <li>
              <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                  ></path>
              </svg>
              <span use:inertia="{{ href: '/logout', method: 'post' }}" class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </a>
          </li>
          <li>
              <p class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "></p>
          </li>
          <li>
              <p class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "></p>
          </li>
          <li>
              <p class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "></p>
          </li>
          <li>
              <p class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "></p>
          </li>
          </ul>
      </div>
  </aside>
          
  </div>
</nav>
  {:else}
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
        <li><a href="/home" use:inertia class="link">beranda</a></li>
        <li><a href="/edukasi" use:inertia class="link">edukasi</a></li>
        <li><a href="/sharing" use:inertia class="link">sharing</a></li>
        <li><a href="/home" use:inertia class="link">belanja</a></li>
      
        <a href="/login" use:inertia class="btn btn-primary"> Login </a>

      </ul>
    </div>
  </nav>
{/if}


