"use client";
import { useState } from "react";

export default function ScheduleForm() {

    const [email, setEmail] = useState('');
    const [business, setBusiness] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
          const response = await fetch('api/supabase/schedule-form', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({  
                email,  
                business,
                city,
                phone,
                website,
                about,
            })
          });
          const data = await response.json();
          if (response.ok) {
            setEmail('');
            setBusiness('');
            setCity('');
            setPhone('');
            setWebsite('') 
            setAbout('');
            alert("Form Successfully Submitted")
          } else {
            throw new Error("Failed to submit the form");
          }
    
    
        } catch (error) {
          console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={ handleSubmit } method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="business-name" className="block text-sm/6 font-semibold text-gray-900">
                    Busines Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="business-name"
                      name="business-name"
                      type="text"
                      required
                      onChange={(e) => setBusiness(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm/6 font-semibold text-gray-900">
                    Website
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="website"
                      name="website"
                      type="text"
                      onChange={(e) => setWebsite(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Cities
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      onChange={(e) => setCity(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                    Please describe the jobs you're hiring for
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      required
                      onChange={(e) => setAbout(e.target.value)}
                      className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
            </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
        </form>
    );
}