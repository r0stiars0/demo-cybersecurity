/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Hoe bescherm je je data?',
      href: '#',
      description: '',
      imageSrc: 'https://security.byrontang.repl.co/htmlbestanden/image/beveiliging.png',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'Wat zijn zwakheden?',
      href: '#',
      description: '',
      imageSrc: 'https://security.byrontang.repl.co/htmlbestanden/image/bedreigingen.png',
      imageAlt: '',
    },
    {
        id: 3,
        name: 'Hackers die helpen?',
        href: '#',
        description: '',
        imageSrc: 'https://security.byrontang.repl.co/htmlbestanden/image/aanvalleres.png',
        imageAlt: '',
      },    
      {
        id: 4,
        name: 'Wat zijn maatregelen tegen computercriminaliteit?',
        href: '#',
        description: '',
        imageSrc: 'https://security.byrontang.repl.co/htmlbestanden/image/maatregelen.png',
        imageAlt: '',
      }, 
  ]
  
  export default function MainTiles() {
    return (
        <div className=" max-w-7xl mx-1 md:mx-2 py-8 mb-10">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-emerald-600"
              >
                <div className="aspect-w-1 aspect-h-1 bg-emerald-600 group-hover:opacity-75 sm:aspect-none sm:h-64">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-100 text-center">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                </div>
              </div>
            ))}
          </div>
        </div>

    )
  }
  