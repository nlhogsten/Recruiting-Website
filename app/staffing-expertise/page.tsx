import Image from "next/image";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Hawaii Talent Acquisition',
    description: 'We hire local talent in a wide range of industries such as environmental, finance, IT, software development, engineering, and construction',
};

const ComputerSVG = ({ className }: {className?: string}) => (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className={className}
    >
      <path d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
);
const CraneSVG = ({ className }: {className?: string}) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className={className}
    >
      <path d="M20 6V5a1 1 0 00-1-1H9V3H6v1H5v2h1v9H5v-2H3v2H2v2h1v4h2v-4h5v4h2v-4h1v-2h-1v-2h-2v2H9V6h8v4.62c-.47.17-.81.61-.81 1.14 0 .44.24.84.61 1.06V14h.62c.34 0 .61.28.61.62 0 .34-.27.62-.61.62-.22 0-.42-.12-.53-.31a.62.62 0 00-.84-.22c-.3.16-.4.54-.23.84.33.56.94.92 1.6.92 1.01 0 1.84-.83 1.84-1.85 0-.78-.5-1.48-1.23-1.74v-.06c.38-.22.62-.62.62-1.06 0-.46-.27-.85-.65-1.06V6h2M8 13.66l-1 1v-1.42l1-1v1.42m0-2.95l-1 1v-1.42l1-1v1.42m-1-2V7.29l1-1v1.42l-1 1z" />
    </svg>
);
const FlaskSVG = ({ className }: {className?: string}) => (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className={className}
    >
      <path d="M175 389.4c-9.8 16-15 34.3-15 53.1-10 3.5-20.8 5.5-32 5.5-53 0-96-43-96-96V64C14.3 64 0 49.7 0 32S14.3 0 32 0h192c17.7 0 32 14.3 32 32s-14.3 32-32 32v245.9l-49 79.6zM96 64v96h64V64H96zM352 0h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v150.9l117.7 191.3a69.54 69.54 0 0110.3 36.4c0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4 0-12.8 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.3-32-32s14.3-32 32-32h32zm32 64v160c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8V64h-64z" />
    </svg>
);
const BuildingSVG = ({ className }: {className?: string}) => (
    <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
    />
    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
  </svg>
);
const CodeSVG = ({ className }: {className?: string}) => (
    <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
  </svg>
);
const HeadsetSVG = ({ className }: {className?: string}) => (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className={className}
    >
      <path d="M8 1a5 5 0 00-5 5v1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V6a6 6 0 1112 0v6a2.5 2.5 0 01-2.5 2.5H9.366a1 1 0 01-.866.5h-1a1 1 0 110-2h1a1 1 0 01.866.5H11.5A1.5 1.5 0 0013 12h-1a1 1 0 01-1-1V8a1 1 0 011-1h1V6a5 5 0 00-5-5z" />
    </svg>
);

const features = [
    {
        name: 'Software Development',
        description: 'Technology constantly evolves requiring a workforce adaptable to new languages and niche technical knowledge as with what has happened with Artificial Intelligence. Businesses are relying more heavily on software solutions, so the demand for skilled developers and engineers continues to soar.',
        href: '#',
        icon: CodeSVG,
    },
    {
        name: 'Environmental',
        description: "This industry is experiencing rapid growth as organizaions prioriztize sustainability and remediation. With increasing concerns about climate change, pollution, and resource depletion, the demand is rising to identify skilled professionals to address these challenges.",
        href: '#',
        icon: FlaskSVG,
    },
    {
        name: 'Engineering & Architecture',
        description: 'The world continually builds up and it seems hiring top-tier engineering and architectural talent does too. It can be a daunting task - with specialized skill sets, rigorous licensing requirements, and a competitive market, finding the right fit requires a strategic approach.',
        href: '#',
        icon: BuildingSVG,
    },
    {
        name: 'IT',
        description: 'Information Technology is the backbone of modern technology businesses, driving innovation and digital transformation. This space is broad from cloud architects to hardware, system administratotion to tech support, and cyber security to data scientists.',
        href: '#',
        icon: HeadsetSVG,
    },
    {
        name: 'Finance',
        description: 'Market trends, analytics, and keeping up with current technology are some of the challenges presented to the finance industry. Hiring the highest quality finance professionals requires a keen eye for talent, a deep understanding of market trends, and a strategic approach.',
        href: '#',
        icon: ComputerSVG,
    },
    {
        name: 'Construction',
        description: 'The Construction industry is dynamic and ever-evolving sector, demanding skilled professionals who can adapt to rpid changes and stringent safety standards. Hiring the right people is crucial to the success of any construction project.',
        href: '#',
        icon: CraneSVG,
    },
    
];

// add this code after feature.description after pages are made: <p className="mt-6 text-blue-400">Learn More</p>
// Remember to add banner at top

export default function StaffingExpertise() {
  return (
    <div>
      {/* Image Container with Overlay Text */}
      <div className="relative w-full h-[275px]">
        <Image
          src="/banner.webp"
          layout="fill"
          alt="Banner Image"
          objectFit="cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:text-center">
            <h2 className="text-base/7 font-semibold text-blue-400 hidden">
              Pacific StaffLink Staffing Specialties
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-light text-white sm:text-5xl">
              We Know the Job Before the Hire
            </p>
            <p className="mt-6 text-md text-base/7 lg:text-lg text-white font-medium">
              Understanding the importance of experience
              about the industries we hire for is integral to
              hiring great candidates. Our strong industry knowledge is
              essential to help us do this
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="mx-auto px-8 my-12 max-w-2xl sm:my-18 lg:my-20 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="size-12 flex-none text-blue-400"
                />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/6 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
