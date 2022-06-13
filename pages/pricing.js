import Features from '../components/Features'
import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'Starter Site',
      price: 299,
      frequency: '/month',
      description: 'All the essentials to provide your best work for clients.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        'Hosting and support for 1 year',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Small Business',
      price: 999,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Hosting and support for 1 year',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 1899,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Hosting and support for 1 year',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <>
      <div className="sm:px-6 mx-auto max-w-7xl bg-white py-24 px-4 tablet:px-8">
        <h2 className="sm:text-5xl sm:leading-none sm:tracking-tight text-3xl font-extrabold text-gray-900 tablet:text-6xl">
          Pricing plans for teams of all sizes
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* Tiers */}
        <div className="mt-24 space-y-12 tablet:grid tablet:grid-cols-3 tablet:gap-x-8 tablet:space-y-0">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    £{tier.price}
                  </span>
                  {/* <span className="ml-1 text-xl font-semibold">{tier.frequency}</span> */}
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="h-6 w-6 flex-shrink-0 text-indigo-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                  'mt-8 block w-full rounded-lg border border-transparent py-3 px-6 text-center font-medium'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Features />
    </>
  )
}
