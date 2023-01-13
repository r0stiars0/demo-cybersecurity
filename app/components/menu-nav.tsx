import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon, XMarkIcon
} from '@heroicons/react/24/outline'
import { Fragment } from 'react'

const menuNav = [
    {title: "Digitale beveiliging", href: "#"},
    {title: "Bedreigingen", href: "#"},
    {title: "Aanvallers en verdedigers", href: "#"},
    {title: "Maatregelen", href: "#"},
]



export default function MenuNav() {
  return (
    <Popover className="relative bg-gradient-to-r from-emerald-900 to-stone-800 mx-1 my-1 md:mx-2 md:my-4 rounded-sm md:rounded-lg">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10 ">
        <div className="bg-gray-50 p-2 rounded-full">
          <a href="#" className="flex">
            <span className="sr-only">Aliya</span>
            <img
              className="h-8 w-auto sm:h-10 text-white"
              src="https://www.svgrepo.com/show/432578/shield-verified.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-stone-800 p-2 text-stone-100 hover:bg-stone-900 hover:text-stone-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-100">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
          {menuNav.map((item) => (
            <a key="title" href={item.href} className="text-base font-medium text-gray-200 hover:text-gray-100">
              {item.title}
            </a>))}



          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-stone-800 shadow-lg ring-1 ring-stone-50 ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=100"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-stone-800 p-2 text-stone-100 hover:bg-stone-900 hover:text-stone-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-100">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-1 gap-4">
              {menuNav.map((item) => (
            <a key="title" href={item.href} className="text-base font-medium text-gray-50 hover:text-gray-900">
              {item.title}
            </a>))}

              </div>
            </div>
          </div>    
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
