export default function NavComp() {
  return (
    <div className="flex-1">
      <nav className="z-50 bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row justify-start px-4 space-y-6 font-[sans-serif] text-[#333] gap-4">
       
          <div className="flexitems-center">
            <input type='text' placeholder='' className="py-2.5 text-base m-2 rounded-md bg-white border border-gray-400 w-80 outline-pink-500" />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
          </div>

          <div className="flex justify-center gap-10 mt-24">
            <div className="h-10 w-10 relative">
            <span className="relative inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 ml-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

    <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
</span>
            </div>
            <div>
              <div className="text-sm font-medium text-secondary-500">Steven Jobs</div>
              <div className="text-xs text-secondary-400">Joined in April 1976</div>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}
