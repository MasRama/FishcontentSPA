<script>
    import { inertia } from '@inertiajs/inertia-svelte'
    import Navbar from '../Components/navbar.svelte'

    export let isLogin
  </script>


<div>
    <body class="font-poppins">
        <header class="">
            {#if isLogin}
            <Navbar isLogin="true"/>
                {:else}
            <Navbar/>    
            {/if}
        </header>
        <main>
            <div class="container mx-auto text-center mt-24 ">
                <h2 class="mb-5">Our Services</h2>
                <p class="text-base">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                <section class=" grid gap-4 mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                    <div class="flex relative flex-col items-center   border-[1px] border-gray-200 px-8 py-12 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:cursor-pointer duration-300 after:w-full  after:h-2 after:top-0 after:absolute after:rounded-lg hover:after:bg-red-500  after:transition-all">
                        <img src="images/card-item-1.png" alt="orange">
                        <div class="mt-4">
                            <h4 class="mb-5">Orange</h4>
                            <p class="text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>
                    <div class=" flex relative flex-col items-center  border-[1px] border-gray-200 px-8 py-12 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:cursor-pointer duration-300 after:w-full  after:h-2 after:top-0 after:absolute after:rounded-lg hover:after:bg-yellow-500 after:transition-all">
                        <img src="images/card-item-2.png" alt="orange">
                        <div class="mt-4">
                            <h4 class="mb-5">Grapes</h4>
                            <p class="text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>
                    <div class=" flex relative flex-col items-center  border-[1px] border-gray-200 px-8 py-12 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:cursor-pointer duration-300 after:w-full  after:h-2 after:top-0 after:absolute after:rounded-lg hover:after:bg-green-500 after:transition-all">
                        <img src="images/card-item-3.png" alt="orange">
                        <div class="mt-4">
                            <h4 class="mb-5">Guava</h4>
                            <p class="text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>
                </section>
                <button class="btn btn-third mt-12">Read more</button>
            </div>
        </main>
        <footer>
            <div class="container mx-auto mt-0 lg:mt-16 flex flex-col gap-12 py-16   md:flex-row md:gap-18 lg:gap-24 lg:flex-row">
                <div class="basis-1/4">
                    <a class="flex items-center gap-4 mb-7  " href="/">
                        <img
                        src="images//icon.png"
                        alt="logo"
                        class="max-w-[3rem] rounded-md"
                        />
                        <span class="text-xl capitalize font-bold">fishcontent indonesia</span>
                    </a>
                    <p class="text-base lg:text-lg leading-relaxed ">
                        Rt.17 Rw.06 Desa Kasri Kec.Bululawang Kab.Malang Malang Jawa timur Indonesia 65166.
                </div>
                <div class="basis-3/4 grid grid-cols-1 gap-y-12 text-center justify-center lg:text-left lg:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                        <h4 class="mb-6">Pelayanan</h4>
                        <ul class="flex flex-col gap-2">
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Edukasi perikanan</a></li>
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Edukasi Aquatik</a></li>
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Marketplace aquatik</a></li>
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Mitra Marketplace</a></li>
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Komunitas Perikanan</a></li>
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Komunitas Aquatik</a></li>
                            <li><a href="/" class="link text-[.9rem] sm:text-base">Pakar ahli perikanan</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="mb-6">Kontak</h4>
                        <ul class="flex flex-col gap-2">
                            <li class="text-[.9rem] sm:text-base">fishcontent.idn@gmail.com </li>
                            <li class="text-[.9rem] sm:text-base">M. Ferrari Firmansyah </li>
                            <li class="text-[.9rem] sm:text-base">085155441510 </li>
                            <li class="text-[.9rem] sm:text-base">@fishcontent.id</li>
    
                        </ul>
                    </div>
                     <div>
                        <h4 class="mb-6">Ikuti kami</h4>
                        <ul class="flex gap-2 justify-center lg:justify-start ">
                            <li><a href="/" class="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 hover:bg-black hover:text-white duration-300"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="/" class="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 hover:bg-black hover:text-white duration-300"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="/" class="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 hover:bg-black hover:text-white duration-300"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="/" class="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 hover:bg-black hover:text-white duration-300"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
            <div class="bg-gray-200 p-6 text-center leading-relaxed ">
                <p class="text-xs lg:text-sm ">Copyright © 2021 All Rights Reserved By Fishcontent Indonesia </p>
            </div>
        </footer>
    
    </body>
</div>