const people = [
    {
      name: 'Responsive',
      role: 'We will build you a beautiful, mobile friendly website that is designed to look great on every screen.',
      imageUrl:
        'https://LorellaPalmerLTD.b-cdn.net/responsive%201600.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
          'https://LorellaPalmerLTD.b-cdn.net/responsive%201600.png',
        twitterUrl: '#',
        linkedinUrl: '#',
      },{
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
          'https://LorellaPalmerLTD.b-cdn.net/responsive%201600.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
  ]

export default function Tabbed() {
  return (
      <>
      /* Three column section
      <div className="bg-blue-100">
      <div className="bg-pink-200 mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="bg-slate-400 space-y-12">
          <div className="bg-blue-800 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-500 wiggle">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
              quis et.
            </p>
          </div>
          <ul
            role="list"
            className="bg-green-200 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-16"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="bg-blue-800 space-y-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <img className="object-cover" src={person.imageUrl} alt="" width={200} height={200}/>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-center">{person.name}</h3>
                      <p className="text-indigo-600 text-center">{person.role}</p>
                    </div>
                    {/* <ul role="list" className="flex space-x-5"> */}
                      {/* <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li> */}
                    {/* </ul> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 80">
    <path stroke-width="0.5" stroke="#f00" fill="#00f" d="M95 5 Q70 20 70 38 T50 65 Q55 50 30 40 T5 5z"/>
</svg> */}
    </div>
    
  
    </>
  )
}