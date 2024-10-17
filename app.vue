<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CogBoxIcon from 'vue-material-design-icons/CogBox.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import LinkVariantIcon from 'vue-material-design-icons/LinkVariant.vue'
import TimerSandEmptyIcon from 'vue-material-design-icons/TimerSandEmpty.vue'
import CheckBoldIcon from 'vue-material-design-icons/CheckBold.vue'
import CodeBlockBracesIcon from 'vue-material-design-icons/CodeBlockBraces.vue'

import { marked } from 'marked';

const { data: data } = await useFetch('/api/all')
const entities = data._rawValue.entities
const types = data._rawValue.parameterTypes
const parameters = data._rawValue.parameters

let selected = ref(entities[0].id)

function getById(id, arr) {
  return arr.find((item) => item.id === id)
}
</script>

<template>
  <div class="h-full">
    <NuxtRouteAnnouncer />
    <div class="h-full w-full flex overflow-hidden antialiased text-gray-800">
      <!-- section body side nav -->
      <nav aria-label="side bar" aria-orientation="vertical"
        class="flex-none flex flex-col items-center text-center bg-purple-900 text-gray-400 border-r">
        <div class="h-16 flex items-center w-full">
          <img class="h-6 w-6 mx-auto" src="/img/planet-earth-dan-gerhard-01.webp">
        </div>
        <ul>
          <li>
            <a title="Home" href="#home" class="h-16 px-6 flex items-center text-white bg-purple-700 w-full">
              <i class="mx-auto">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a title="Views" href="#views" class="h-16 px-6 flex items-center hover:text-white w-full">
              <i class="mx-auto">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M18.546 3h-13.069l-5.477 8.986v9.014h24v-9.014l-5.454-8.986zm-3.796 12h-5.5l-2.25-3h-4.666l4.266-7h10.82l4.249 7h-4.669l-2.25 3zm-9.75-4l.607-1h12.787l.606 1h-14zm12.18-3l.607 1h-11.573l.607-1h10.359zm-1.214-2l.606 1h-9.144l.607-1h7.931z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a title="Customer Lists" href="#customer-lists"
              class="h-16 px-6 flex items-center hover:text-white w-full">
              <i class="mx-auto">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a title="Reporting" href="#reporting" class="h-16 px-6 flex items-center hover:text-white w-full">
              <i class="mx-auto">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a title="Admin" href="#admin" class="h-16 px-6 flex items-center hover:text-white w-full">
              <i class="mx-auto">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                </svg>
              </i>
            </a>
          </li>
        </ul>

        <div class="mt-auto h-16 flex items-center w-full">
          <!-- <img
            style="filter: invert(85%);"
            class="h-8 w-10 mx-auto"
            src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/chi.png"
          /> -->
        </div>
      </nav>

      <div class="flex-1 flex flex-col">
        <!-- section body top nav -->
        <nav aria-label="top bar" class="flex-none flex justify-between bg-white h-16">
          <!-- top bar left -->
          <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
            <li class="group relative">
              <button class="flex items-center h-full px-4 text-lg font-bold">
                FireSat Mission
              </button>
            </li>
            <!-- add button -->
            <li class="group relative">
              <button aria-controls="add" aria-expanded="false" aria-haspopup="listbox"
                class="flex items-center h-full px-4 text-sm">
                <i>
                  <svg class="fill-current w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
                  </svg>
                </i>
                <span class="ml-2">Add</span>
              </button>
            </li>
          </ul>

          <!-- to bar right  -->
          <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center">
            <li class="relative">
              <input title="Search Bar" aria-label="search bar" role="search"
                class="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-black focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-gray-500"
                type="text" placeholder="Search Chi Desk Support">
              <i class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
                <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                </svg>
              </i>
            </li>

            <li class="h-8 w-8 ml-3">
              <button title="Notifications" aria-label="notifications"
                class="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline">
                <i>
                  <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path
                      d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
                  </svg>
                </i>
              </button>
            </li>

            <li class="h-8 w-8 ml-3">
              <button title="v2 REPL" aria-label="repl"
                class="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline">
                <i>
                  <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path
                      d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z" />
                  </svg>
                </i>
              </button>
            </li>

            <li class="h-8 w-8 ml-3">
              <button title="Products" aria-label="chi desk products"
                class="w-full h-full rounded-md focus:outline-none focus:shadow-outline">
                <i class="text-gray-600">
                  <svg class="fill-current w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z" />
                  </svg>
                </i>
              </button>
            </li>

            <li class="h-10 w-10 ml-3">
              <button title="Page Menu" aria-label="page menu"
                class="h-full w-full rounded-full border focus:outline-none focus:shadow-outline">
                <img class="h-full w-full rounded-full mx-auto"
                  src="https://cdn.discordapp.com/attachments/1008396106041925752/1289309509633839134/modronimagines_genering_engineer_abstract_user_profile_image_si_72cf1392-10b1-420c-ba6f-25cbf49f1b0b.png?ex=66f85a8d&is=66f7090d&hm=ecb2aaf6b0a1304c94261f61fba60cfe1c8ca48a46b787669f319564ffdd4918&">
              </button>
            </li>
          </ul>
        </nav>

        <!-- section body header -->
        <!-- <header
          aria-label="page caption"
          class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
        >
          <h1 id="page-caption" class="font-semibold text-lg">SparData Space Engineering</h1>
        </header> -->

        <!-- main content -->
        <main class="flex-grow flex min-h-0 border-t">
          <!-- section update to tickets -->
          <section class="flex flex-col p-4 w-full max-w-md flex-none bg-gray-100 min-h-0 overflow-auto">
            <h1 class="font-semibold mb-3">
              Product Tree
            </h1>
            <div class="relative mb-5">
              <input id="username"
                class="appearance-none border pl-10 hover:border-gray-400 transition-colors rounded-md w-full py-5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                type="text" placeholder="Search...">
              <div class="absolute right-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div class="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <ul>

              <template v-for="item in entities">
                <li v-if="!item.parentId">
                  <article tabindex="0"
                    class="cursor-pointer border rounded-md p-3 flex items-center text-gray-700 mb-2 hover:border-green-500 focus:outline-none"
                    :class="{'bg-blue-200': item.id === selected, 'bg-white': item.id !== selected, 'border-blue-500': item.id === selected}" @click="selected = item.id">
                    <span class="flex-none pt-1 pr-2">
                      <!-- <img class="h-8 w-8 rounded-md" src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png" /> -->
                      <div class="h-8 w-8 rounded-md bg-gray-400 flex items-center justify-center">
                        <CogIcon fill-color="white" />
                      </div>
                    </span>
                    <header class="ml-1 font-semibold grow">
                      {{ item.name }}
                    </header>
                    <span class="text-stone-400">{{ item.product }}</span>
                  </article>

                  <template v-if="item.children.length > 0">
                    <ul class="ml-10">
                      <li v-for="item in item.children">
                        <article tabindex="0"
                          class="cursor-pointer border rounded-md p-3 flex items-center text-gray-700 mb-2 hover:border-green-500 focus:outline-none"
                          :class="{'bg-blue-200': item.id === selected, 'bg-white': item.id !== selected, 'border-blue-500': item.id === selected}" @click="selected = item.id">
                          <span class="flex-none pt-1 pr-2">
                            <!-- <img class="h-8 w-8 rounded-md" src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png" /> -->
                            <div class="h-8 w-8 rounded-md bg-gray-400 flex items-center justify-center">
                              <CogIcon fill-color="white" />
                            </div>
                          </span>
                          <header class="ml-1 font-semibold grow">
                            {{ item.name }}
                          </header>
                          <span class="text-stone-400">{{ item.product }}</span>
                        </article>
                      </li>
                    </ul>
                  </template>
                </li>

              </template>



            </ul>
          </section>

          <!-- section content -->
          <section aria-label="main content" class="flex min-h-0 flex-col flex-auto border-l" v-if="selected && getById(selected, entities)">
            <!-- content navigation -->
            <nav class="bg-gray-100 flex p-4">
              <!-- open tickets nav -->
              <section aria-labelledby="open-tickets-tabs-label" class="mr-4 focus:outline-none">
                <div class="bg-gray-100 rounded-lg p-3 flex items-center flex-wrap">
                  <ul class="flex items-center">
                    <li class="inline-flex items-center">
                      <a href="#" class="text-gray-600 hover:text-blue-500 align-baseline">
                        <!-- <CogIcon :size="16" class="w-5 h-auto fill-current mx-2 text-gray-800"></CogIcon> -->
                        <svg class="w-5 h-auto fill-current mx-2 text-gray-400 align-baseline"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                        </svg>
                      </a>

                      <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>

                    <li class="inline-flex items-center">
                      <a href="#" class="text-gray-400 hover:text-blue-500">
                        Satellite
                      </a>

                      <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>

                    <li class="inline-flex items-center">
                      <a href="#" class="text-gray-500 hover:text-blue-500">
                        {{ getById(getById(selected, entities).parentId, entities)?.name }}
                      </a>

                      <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>

                    <li class="inline-flex items-center">
                      <a href="#" class="text-gray-600 hover:text-blue-500 text-gray-900">
                        {{ getById(selected, entities).name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <!-- stats nav -->
            </nav>

            <div class="mx-auto rounded-lg shadow-lg w-full lg:flex">
              <div class="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <img class="w-60 object-contain" :src="getById(selected, entities).image">
              </div>
              <div class="flex-1 bg-gray-50 px-6 py-8 lg:p-12">
                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {{ getById(selected, entities).name }}
                </h3>
                <!-- <p class="mt-6 text-base text-gray-500 ">Limited time offer: Get access to our
                  premium service with exclusive
                  features. This package includes access to both our web and mobile applications. Take advantage of
                  this offer
                  now and enjoy lifetime benefits.</p> -->
                <div class="mt-8">
                  <div class="flex items-center">
                    <h4
                      class="flex-shrink-0 pr-4 bg-gray-50 text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Notes
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200 " />
                    <div class="ml-2 text-indigo-800">
                      <PencilIcon size="16" />
                    </div>
                  </div>
                  <div class="mt-3 text-sm" v-if="getById(selected,entities).notes" v-html="marked.parse(getById(selected, entities).notes)">
                  </div>
                </div>
                <div class="mt-8">
                  <div class="flex items-center">
                    <h4
                      class="flex-shrink-0 pr-4 bg-gray-50 text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Links
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200 " />
                    <div class="ml-2 text-indigo-800">
                      <PencilIcon size="16" />
                    </div>
                  </div>
                  <div class="flex mt-4 gap-5">
                    <a class="px-6 py-2 min-w-[120px] text-center text-white bg-indigo-800 border border-indigo-700 rounded flex justify-center items-center h-50"
                      href="">
                      <div class="mt-1">
                        <LinkVariantIcon />
                      </div>
                      <div class="flex-1 ml-5 flex flex-col items-center">
                        <span class="text-lg font-medium">Datasheet</span>
                        <span class="text-xs text-gray-300">nxp.com</span>
                      </div>
                    </a>
                    <a class="px-6 py-2 min-w-[120px] text-center text-white bg-indigo-800 border border-indigo-700 rounded flex justify-center items-center h-50"
                      href="">
                      <div class="mt-1">
                        <LinkVariantIcon />
                      </div>
                      <div class="flex-1 ml-5 flex flex-col items-center">
                        <span class="text-lg font-medium">CAD Files</span>
                        <span class="text-xs text-gray-300">example.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- content caption -->
            <header class="bg-gray-100 border-t flex items-center py-1 px-4">
              <div class="flex">
                <h2 id="content-caption" class="font-semibold">
                  Parameters
                </h2>
              </div>
              <div class="ml-auto">
                <button title="See available tickets in this view" aria-label="play"
                  class="border rounded-md px-3 py-2 leading-none">
                  Add
                </button>
              </div>
            </header>

            <!-- content overflow section
                remove table and thead but keep tbody and change tbody to section, in order
                to have scrollable overflow section -->
            <table aria-describedby="info-popup" aria-label="open tickets"
              class="border-t w-full min-h-0 flex flex-col">
              <!-- <thead class="flex w-full flex-col px-4">
                <tr class="border-b flex">
                  <th class="font-semibold text-left py-3 pl-3 pr-1 w-24">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th class="font-semibold text-left py-3 px-1 w-24 truncate">
                    ID
                  </th>
                  <th class="font-semibold text-left py-3 px-1 w-full max-w-xs xl:max-w-lg truncate">
                    Subject
                  </th>
                  <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
                    Requester
                  </th>
                  <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
                    Requester updated
                  </th>
                  <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
                    Group
                  </th>
                  <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
                    Assignee
                  </th>
                </tr>
              </thead> -->
              <tbody class="flex w-full flex-col min-h-0 overflow-hidden px-4">
                <!-- low -->
                <!-- <tr class="border-b flex">
                  <th class="bg-gray-100 text-left px-3 py-2 flex-1" colspan="7">
                    <h2 class="text-sm">
                      <span class="font-normal mr-1">Priority</span><span>Low</span>
                    </h2>
                  </th>
                </tr> -->

                <tr role="row" class="hover:bg-blue-100 border-b flex cursor-pointer" v-for="parameter in getById(selected, entities).parameters">
                  <td role="cell" headers="select" class="py-3 pl-3 pr-1 w-24 flex items-start">
                    <input class="mt-1" type="checkbox">
                    <div class="ml-auto relative group" />
                  </td>
                  <td class="py-3 px-1 w-48 truncate">
                    <div v-if="parameter.status < 3" style=""
                      class="font-mono rounded-sm bg-yellow-600 text-white w-6 h-6 inline-flex items-center justify-center leading-none">
                      <TimerSandEmptyIcon fill-color="white" :size="12" />
                    </div>
                    <div v-if="parameter.status >= 3" style=""
                      class="font-mono rounded-sm bg-green-600 text-white w-6 h-6 inline-flex items-center justify-center leading-none">
                      <CheckBoldIcon fill-color="white" :size="12" />
                    </div>
                    <span class="ml-2 font-bold">{{ getById(getById(parameter.id, parameters).parameterId, types).name }}</span>
                  </td>
                  <td class="py-3 px-1 flex-1">
                    <div class="relative group w-full">
                      <p class="w-full truncate font-mono">
                        {{ getById(parameter.id, parameters).value }}
                      </p>
                    </div>
                  </td>
                  <td class="py-3 px-1 mr-2 truncate">
                    <ChevronRightIcon />
                  </td>
                </tr>

              </tbody>
            </table>

            <div class="w-full flex-1 bg-gray-100 px-1 py-3">
              <div class="text-center">
                <button type="button" class="
                    focus:outline-black
                    text-white
                    text-sm
                    py-2.5 px-4
                    border-b-4 border-indigo-700 hover:border-indigo-400
                    bg-indigo-800 hover:bg-indigo-400
                    w-7/12
                    rounded
                  ">
                  Recalculate
                </button>
              </div>

              <div class="flex justify-evenly mt-2 text-sm">
                <div class="text-gray-700">
                  Last checked: 4 hours ago by
                  <div
                    class="inline-flex items-center p-0 w-auto rounded-full border bg-indigo-100 border-indigo-700 text-indigo align-middle ml-1">
                    <img src="https://via.placeholder.com/40" alt="avatar"
                      class="w-7 h-7 rounded-full object-cover relative">
                    <span class="font-semibold pl-1 pr-4 text-sm" style="padding-bottom: 2.5px">
                      @alex
                    </span>
                  </div>
                </div>

                <div class="text-gray-700">
                  Last updated: 8 hours ago by
                  <div
                    class="inline-flex items-center p-0 w-auto rounded-full border bg-indigo-100 border-indigo-700 text-indigo align-middle ml-1">
                    <img src="https://via.placeholder.com/40" alt="avatar"
                      class="w-7 h-7 rounded-full object-cover relative">
                    <span class="font-semibold pl-1 pr-4 text-sm" style="padding-bottom: 2.5px">
                      @alesia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- content footer, currently hidden -->
            <footer aria-label="content footer" class="flex p-3 bg-white border-t hidden">
              footer
            </footer>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
