const people = [
  {
    name: 'Responsive',
    role: 'We will build you a beautiful, mobile friendly website that is designed to look great on every screen.',
    imageUrl: 'https://LorellaPalmerLTD.b-cdn.net/responsive%201600.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl: 'https://LorellaPalmerLTD.b-cdn.net/responsive%201600.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl: 'https://LorellaPalmerLTD.b-cdn.net/responsive%201600.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
]

export default function Tabbed() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-green-50">
        <div className="mx-auto max-w-6xl py-12 px-4 tablet:px-8 tablet:py-24">
          <div className="space-y-12">
            <div className="space-y-4 tablet:max-w-xl desktop:max-w-none">
              <h2 className="text-center text-3xl font-extrabold tracking-tight">
                Why Webisity?
              </h2>
              <p className="mx-auto max-w-3xl text-center text-xl text-gray-500">
                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                dolor ultricies donec risus sodales. Tempus quis et. Odio nisi,
                lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies
                donec risus sodales. Tempus quis et.
              </p>
            </div>
            <ul className="tablet:grid tablet:grid-cols-3 tablet:gap-x-12">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-1 aspect-h-1 relative">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-center">{person.name}</h3>
                        <p className="text-center text-pink-800">
                          {person.role}
                        </p>
                      </div>
                      {/* <ul role="list" className="flex space-x-5">
                        <li>
                          <a
                            href={person.twitterUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl bg-slate-400 py-12 px-4 tablet:px-8 tablet:py-24">
        <div className="mx-auto max-w-7xl gap-x-6 gap-y-12 space-y-4 tablet:grid tablet:grid-cols-2 tablet:gap-x-12">
          <div className="aspect-w-3 aspect-h-2 order-2">
            <img
              className="absolute inset-0 z-0 h-full w-full object-cover"
              src="no love.jpg"
              alt=""
            />
          </div>

          <div className="tabletflex bg-pink-200 tablet:items-center">
            <div className="bg-blue-400 px-4">
              <h1>Wireframe outlining.</h1>
              <h2>
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400">
        <div className="mx-auto max-w-7xl gap-x-6 gap-y-12 space-y-12 bg-blue-100 tablet:grid tablet:grid-cols-2 tablet:gap-x-12">
          <div className="aspect-w-3 aspect-h-2  bg-pink-200">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="no love.jpg"
              alt=""
            />
          </div>

          <div className=" tablet:flex tablet:items-center">
            <div className="bg-blue-400 px-4">
              <h1>Two Wireframe outlining.</h1>
              <h2>
                Proper planning before the production stage is crucial for a
                successful website. We will build a wireframe outline, allowing
                you to see a clear picture of the flow and feel of your site.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600">
        <div className="mx-auto max-w-6xl gap-0 space-y-8 bg-green-200 px-4 py-12 tablet:grid tablet:grid-cols-4">
          <div className="grid place-items-center bg-blue-200 text-center tablet:col-span-2">
            <div className="bg-blue-400 text-center">
              <h1>Ready To Start?</h1>
              <h1 className="mt-4">
                Our talented designers are here, waiting to hear from you, so
                they can get started on creating your perfect site. Get in touch
                with us today, and we’ll take care of everything for you!
              </h1>
            </div>
          </div>
          <div className="tablet:ol-span-2 tablet:py-24 tablet:px-8 desktop:pl-12">
            <div className="mx-auto max-w-lg tablet:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
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
