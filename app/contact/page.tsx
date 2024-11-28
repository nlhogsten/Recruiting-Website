import ScheduleForm from "./components/ScheduleForm"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff With Us",
  description: "Get in contact with us and we will be your headhunter to find talent for any job in any industry.",
};

const BuildingIcon = ({ className }: {className?: string}) => (
    <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
    >
    <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 001 1h16a1 1 0 001-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z" />
    <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z" />
    </svg>
)
const EnvelopeIcon = ({ className }: {className?: string}) => (
    <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className={className}
    >
    <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
    </svg>
)
const PhoneIcon = ({ className }: {className?: string}) => (
    <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className={className}
    >
    <path d="M10 3a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h4zM6 2a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2V4a2 2 0 00-2-2H6z" />
    <path d="M8 12a1 1 0 100-2 1 1 0 000 2zM1.599 4.058a.5.5 0 01.208.676A6.967 6.967 0 001 8c0 1.18.292 2.292.807 3.266a.5.5 0 01-.884.468A7.968 7.968 0 010 8c0-1.347.334-2.619.923-3.734a.5.5 0 01.676-.208zm12.802 0a.5.5 0 01.676.208A7.967 7.967 0 0116 8a7.967 7.967 0 01-.923 3.734.5.5 0 01-.884-.468A6.967 6.967 0 0015 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 01.208-.676zM3.057 5.534a.5.5 0 01.284.648A4.986 4.986 0 003 8c0 .642.12 1.255.34 1.818a.5.5 0 11-.93.364A5.986 5.986 0 012 8c0-.769.145-1.505.41-2.182a.5.5 0 01.647-.284zm9.886 0a.5.5 0 01.648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 01-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 01.283-.648z" />
    </svg>
)

export default function Contact() {

    return (

      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">

          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                  <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                </svg>
              </div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Hire with us
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Fill out this form to inquire about hiring with Pacific ScoutLink.
                We will review and respond in about 1-2 business days and schedule a meeting - mahalo!
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingIcon className="size-7" />
                  </dt>
                  <dd>
                    Based in
                    <br />
                    Honolulu, HI
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="size-7"/>
                  </dt>
                  <dd>
                    <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                      +1 (808) 751-7375
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="size-7"/>
                  </dt>
                  <dd>
                    <a href="mailto:hello@example.com" className="hover:text-gray-900">
                      PacificScoutLink@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

        <ScheduleForm/>
          
        </div>
      </div>
    )
  }