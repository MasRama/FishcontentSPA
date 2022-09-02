<script>
    import { inertia } from '@inertiajs/inertia-svelte'
    import Navbar from '../Components/navbar.svelte'

    export let isLogin
  </script>


<div>
    <body class="font-poppins bg-slate-100">
        <header class="bg-slate-100">
            {#if isLogin}
            <Navbar isLogin="true"/>
                {:else}
            <Navbar/>    
            {/if}
        </header>
        <main class="container mx-auto">
            <h2 class="text-center mt-28">Ruang Edukasi</h2>
            <p class="text-center mt-8">Tempat dimana kamu bisa belajar perikanan dan akuatik!</p>
            <div class="mt-36" >
                <section class=" py-6 text-center items-center gap-16 flex flex-col md:flex-row md:text-left md:py-36    ">
                    <div class="basis-1/2">
                        <img src="images/ed1.png" alt="ini cupang" class="h-full mx-auto ">
                    </div>
                    <div class="basis-1/2">
                        <h3 class="mb-5 text-xl font-bold lg:mb-12 xl:text-4xl">Cara berternak ikan cupang</h3>
                        <p class="text-sm mb-12  lg:text-base xl:text-lg">Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia. </p>
                        <button class="btn btn-third">Belajar sekarang</button>
                    </div>
                </section>
                <section class=" py-6 text-center items-center gap-16 flex flex-col md:flex-row-reverse md:text-left md:py-36    ">
                    <div class="basis-1/2">
                        <img src="images/grapes.png" alt="ini cupang" class="h-full mx-auto  ">
                    </div>
                    <div class="basis-1/2">
                        <h3 class="mb-5 text-xl font-bold lg:mb-12 xl:text-4xl">Best Fresh Grapes </h3>
                        <p class="text-sm mb-12  lg:text-base xl:text-lg">but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be.</p>
                        <button class="btn btn-third">Buy now</button>
                    </div>
                </section>
                <section class=" py-6 text-center items-center gap-16 flex flex-col md:flex-row md:text-left md:py-36    ">
                    <div class="basis-1/2">
                        <img src="images/gauva.png" alt="ini cupang" class="h-full   mx-auto">
                    </div>
                    <div class="basis-1/2">
                        <h3 class="mb-5 text-xl font-bold lg:mb-12 xl:text-4xl">Best Fresh Gauva </h3>
                        <p class="text-sm mb-12  lg:text-base xl:text-lg">but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be.</p>
                        <button class="btn btn-third">Buy now</button>
                    </div>
                </section>
            </div>
            
            <!-- <div class="container mx-auto my-16 gap-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 ">
    
                <section class=" flex  flex-col transition-all duration-400 gap-10 bg-white p-8 rounded-xl shadow-xl hover:cursor-pointer hover:-translate-y-4  hover:scale-[1.02] hover:shadow-3xl">
                    <div class="rounded-xl">
                        <img src="images/ed1.png" alt="cupang" class="h-full object-cover">
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-3">Cara berternak ikan cupang</h3>
                        <p class="text-sm line-clamp-2 mb-6 hover:cursor-pointer hover:line-clamp-none ">Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia. </p>
                        <button class="btn btn-third">Belajar sekarang</button>
                    </div>
                </section>
                <section class="  flex   flex-col gap-10 bg-white p-8 rounded-xl shadow-xl hover:cursor-pointer hover:-translate-y-4 duration-200 hover:scale-[1.02] hover:shadow-3xl">
                    <div class="rounded-xl">
                        <img src="images/ed1.png" alt="cupang" class="h-full object-cover">
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-3">Cara berternak ikan cupang</h3>
                        <p class="text-sm line-clamp-2 mb-6 hover:cursor-pointer hover:line-clamp-none ">Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia. </p>
                        <button class="btn btn-third">Belajar sekarang</button>
                    </div>
                </section>
                <section class="  flex   flex-col gap-10 bg-white p-8 rounded-xl shadow-xl hover:cursor-pointer hover:-translate-y-4 duration-200 hover:scale-[1.02] hover:shadow-3xl">
                    <div class="rounded-xl">
                        <img src="images/ed1.png" alt="cupang" class="h-full object-cover">
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-3">Cara berternak ikan cupang</h3>
                        <p class="text-sm line-clamp-2 mb-6 hover:cursor-pointer hover:line-clamp-none ">Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia. </p>
                        <button class="btn btn-third">Belajar sekarang</button>
                    </div>
                </section>
            </div> -->
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