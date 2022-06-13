import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  AdjustmentsIcon,
  ChatIcon,
} from '@heroicons/react/outline'
import SSL from '../assets/question-shield.svg'

const features = [
  {
    name: 'Responsive',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing',
    icon: AdjustmentsIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]

export default function Features() {
  return (
    <>
      <div className="tablet:text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
          All Inclusive
        </h2>
        <p className="sm:text-4xl mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900">
          Included in all our plans.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 tablet:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div className="bg-white py-12">
        <div className="sm:px-6 mx-auto max-w-xl px-4 tablet:max-w-7xl tablet:px-8">
          <h2 className="sr-only">A better way to send money.</h2>
          <dl className="space-y-10 tablet:grid tablet:grid-cols-3 tablet:gap-8 tablet:space-y-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
