import SeekerForm from "./form/SeekerForm";
import Image from "next/image";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Jobs in Hawaii',
    description: 'We prioritize hiring locally in many different fields such as environmental, tech, finance, engineering, IT, software developemnt, and construction.',
};

export default function JobSeekers() {

    return (
        <>        
            <div className="relative w-full h-[275px]">
                <Image
                    src="/banner.webp"
                    layout="fill"
                    alt="Banner Image"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center mt-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto w-full lg:text-center">
                        <h2 className="text-base/7 font-semibold text-blue-400 hidden">
                        Pacific StaffLink Staffing Specialties
                        </h2>
                        <p className="mt-2 text-3xl font-semibold tracking-light text-white sm:text-5xl">
                        Looking for a job?
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <SeekerForm/>
        </>
    );

}