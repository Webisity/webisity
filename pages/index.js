import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

const benefits = [
  {
    benefit: 'One',
    description:
      'Carrot cake apple pie sugar plum carrot cake tart lemon drops chupa chups. Sweet tart carrot cake chocolate.',
    imageUrl: 'https://webisity.b-cdn.net/bespoke.svg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    benefit: 'Two',
    description:
      'Lollipop lollipop chocolate cake candy canes dessert gingerbread. Sweet tart carrot cake chocolate.',
    imageUrl: 'https://webisity.b-cdn.net/kids-apparel.svg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    benefit: 'Three',
    description:
      'Carrot cake apple pie sugar plum carrot cake tart lemon drops chupa chups. Jelly beans bear claw marshmallow sugar.',
    imageUrl: 'https://webisity.b-cdn.net/trendy.svg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Index() {
  return (
    <>
      {/* Hero */}
      <div className="mx-auto max-w-6xl gap-4 px-4 py-8 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:pb-24">
        <div className="text-center tablet:items-center tablet:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            <span className="block desktop:inline">Truffle</span>{' '}
            <span className="block text-indigo-600 ">Eating Monster</span>
          </h1>
          <p className="mt-4 text-base text-gray-500 tablet:mx-0 tablet:text-xl">
            Bonbon dessert cheesecake pie cake cotton candy cupcake. Dragée
            powder jelly-o gummies jelly beans ice cream lemon drops apple pie.
          </p>
          <div className="flex justify-center pt-8 tablet:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex rounded-md border border-transparent bg-indigo-600 px-8 py-4 text-base font-medium text-white hover:bg-indigo-700 tablet:px-10 tablet:text-lg"
              >
                Get started
              </a>
            </div>
            <div className="ml-3">
              <a
                href="#"
                className="flex rounded-md border border-transparent bg-indigo-100 px-8 py-4 text-base font-medium text-indigo-700 hover:bg-indigo-200 tablet:py-4 tablet:px-10 tablet:text-lg"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
        {/* className="relative" */}
        <div className="pt-8 tablet:pt-0">
          {/* <svg
              className="absolute inset-y-0 -left-24 hidden h-full w-48 tablet:block"
              fill="#ffffff"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> */}
          <img
            className="w-full object-cover tablet:h-full tablet:w-full"
            src="https://webisity.b-cdn.net/catwalk.svg"
            alt=""
          />
        </div>
      </div>
      {/* Why Webisity? */}

      <div className="relative bg-green-100 tablet:pb-12">
        <div className="mx-auto max-w-6xl py-24 px-4 ">
          <h2 className="text-center text-4xl font-extrabold tracking-tight">
            Eat More Cake?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-500 tablet:text-xl">
            Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
            ultricies donec risus sodales. Tempus quis et. Odio nisi, lectus dis
            nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus
            sodales. Tempus quis et.
          </p>
          <ul className="tablet:grid tablet:grid-cols-3 tablet:gap-x-32">
            {benefits.map((item) => (
              <li key={item.benefit}>
                <div className="pt-8">
                  <img className="h-full w-full" src={item.imageUrl} alt="" />
                  <div className="text-center">
                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight">
                      {item.benefit}
                    </h3>
                    <p className="mt-4 text-base text-gray-500 tablet:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <svg
          className="absolute bottom-0 hidden tablet:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 100"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,74 C747,32 581,24 999,54 C1417,73 1549,93 1759,81 C1969,68 1950,66 2000,58 l0,100 l-2000,0Z"
          ></path>
        </svg>
      </div>

      {/* How It Works */}
      <div className="mx-auto max-w-5xl py-8 px-4 desktop:max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">
          Eat More Cake?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-500 tablet:text-xl">
          The One Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
          dolor ultricies donec risus sodales. Tempus quis et. Odio nisi, lectus
          dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus
          sodales. Tempus quis et.
        </p>
        <div className="relative mt-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16">
          <div className="aspect-w-3 aspect-h-2 tablet:order-2">
            <img
              className="object-contain"
              src="https://webisity.b-cdn.net/happy-family.svg"
              alt=""
            />
          </div>
          <div className="tablet:flex tablet:items-center">
            <div className="text-center">
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight tablet:mt-0">
                Starts
              </h1>
              <p className="mt-4 text-base text-gray-500 tablet:text-lg">
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </p>
            </div>
          </div>
          <svg
            className="absolute -bottom-44 hidden tablet:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 160"
          >
            <path
              fill="none"
              stroke="#8CD3C7"
              strokeWidth="2.2px"
              strokeDasharray="12,26,2.6,0"
              fillOpacity="1"
              d="M184,0 C200,80 300,80 400,80 C500,80 600,80 616,160"
            ></path>
          </svg>
        </div>

        <div className="relative space-y-4 pt-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16 tablet:pt-28">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="object-contain"
              src="https://webisity.b-cdn.net/fast-rocket.svg"
              alt=""
            />
          </div>
          <div className="tablet:flex tablet:items-center">
            <div className="space-y-4 px-4 text-center">
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight tablet:mt-0">
                Wireframe
              </h1>
              <p className="mx-auto max-w-3xl text-center text-base text-gray-500 tablet:text-lg">
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </p>
            </div>
          </div>
          <svg
            className="absolute -bottom-44 hidden tablet:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 160"
          >
            <path
              fill="none"
              stroke="#8CD3C7"
              strokeWidth="2.2px"
              strokeDasharray="12,26,2.6,0"
              fillOpacity="1"
              d="M616,0 C600,80 500,80 400,80 C200,80 200,80 184,160"
            ></path>
          </svg>
        </div>
        <div className="relative space-y-4 pt-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16 tablet:pt-28">
          <div className="aspect-w-3 aspect-h-2 tablet:order-2">
            <img
              className="object-contain"
              src="https://webisity.b-cdn.net/happy-tiny-people.svg"
              alt=""
            />
          </div>
          <div className="tablet:flex tablet:items-center">
            <div className="space-y-4 px-4 text-center">
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight tablet:mt-0">
                Production
              </h1>
              <p className="mx-auto max-w-3xl text-center text-base text-gray-500 tablet:text-lg">
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </p>
            </div>
          </div>
          <svg
            className="absolute -bottom-44 hidden tablet:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 160"
          >
            <path
              fill="none"
              stroke="#8CD3C7"
              strokeWidth="2.2px"
              strokeDasharray="12,26,2.6,0"
              fillOpacity="1"
              d="M184,0 C200,80 300,80 400,80 C500,80 600,80 616,160"
            ></path>
          </svg>
        </div>
        <div className="relative space-y-4 pt-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16 tablet:pt-28">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="object-contain"
              src="https://webisity.b-cdn.net/loved-up.svg"
              alt=""
            />
          </div>
          <div className="tablet:flex tablet:items-center">
            <div className="space-y-4 px-4 text-center">
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight tablet:mt-0">
                QA
              </h1>
              <p className="mx-auto max-w-3xl text-center text-base text-gray-500 tablet:text-lg">
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </p>
            </div>
          </div>
          <svg
            className="absolute -bottom-44 hidden tablet:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 160"
          >
            <path
              fill="none"
              stroke="#8CD3C7"
              strokeWidth="2.2px"
              strokeDasharray="12,26,2.6,0"
              fillOpacity="1"
              d="M616,0 C600,80 500,80 400,80 C200,80 200,80 184,160"
            ></path>
          </svg>
        </div>
        <div className="space-y-4 pt-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16 tablet:pt-28">
          <div className="aspect-w-3 aspect-h-2 tablet:order-2">
            <img
              className="object-contain"
              src="https://webisity.b-cdn.net/party.svg"
              alt=""
            />
          </div>
          <div className="tablet:flex tablet:items-center">
            <div className="space-y-4 px-4 text-center">
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight tablet:mt-0">
                Party!
              </h1>
              <p className="mx-auto max-w-3xl text-center text-base text-gray-500 tablet:text-lg">
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Call To Action */}
      <div className="bg-green-100 px-4 py-12">
        <div className="mx-auto max-w-6xl gap-0 space-y-0 tablet:grid tablet:grid-cols-4">
          <div className="grid place-items-center text-center tablet:col-span-2">
            <div className="space-y-8 text-center">
              <h1 className="text-center text-4xl font-extrabold tracking-tight">
                Ready To Start?
              </h1>
              <p className="mx-auto max-w-3xl text-center text-base text-gray-500 tablet:text-xl">
                Our talented designers are here, waiting to hear from you, so
                they can get started on creating your perfect site. Get in touch
                with us today, and we’ll take care of everything for you!
              </p>
            </div>
          </div>
          <div className="tablet:col-span-2 tablet:py-8 tablet:px-8 desktop:pl-12">
            <div className="mx-auto max-w-lg tablet:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 pt-8 tablet:pt-0"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
