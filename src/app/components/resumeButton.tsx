export default function ResumeButton() {
    return (<>
        <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-gray-900 border border-red-600 hover:border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full rounded-lg ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease rounded-lg " ></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease rounded-lg "></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease rounded-lg "></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-600 rounded-lg  opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease rounded-lg ">Donwload my resume</span>
        </a>
    </>)
}