import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="flex flex-col bg-zinc-900 z-20">
            <div className="invisible md:visible relative pin-b w-full bottom-0 z-20 flex flex-wrap items-center justify-between mt-auto py-4 px-8">
                <h2 className=" font-['Futura'] text-gray-500 text-md">George Oakley 2022</h2>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-gray-500 text-6xl mr-8"/>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="text-gray-500 text-6xl mr-8" />
                    <FontAwesomeIcon icon="fa-brands fa-github" className="text-gray-500 text-6xl" />
                </div>
            </div>
            <div className="md:hidden relative flex-wrap-col m-auto justify-center p-4">
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-gray-500 text-6xl mr-10"/>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="text-gray-500 text-6xl mr-10" />
                    <FontAwesomeIcon icon="fa-brands fa-github" className="text-gray-500 text-6xl" />
                </div>
                <h2 className=" font-['Futura'] text-gray-500 text-md flex justify-center pt-4">George Oakley 2022</h2>
            </div>
        </footer>
    )
}