import Image from "next/image"

export default function Footer() {
  return (
    <footer className="mx-16 px-4 py-12 md:py-16 font-light text-[20px]">
      <div className="grid grid-cols-2 gap-8 mb-16 w-[90%]">
        {/* Newsletter Section */}
        <div className="lg:col-span-1 w-[70%]">
          <h3 className="mb-4">Suscribe for updates!</h3>
          <div className="flex border-b-2 border-dashed border-black">
            <input
              type="email"
              placeholder="Mail Address"
              className="w-full bg-transparent py-2 focus:outline-none text-gray-400 placeholder-gray-400"
            />
            <button className="p-2 text-gray-400">
              <span className="sr-only">Submit</span>
              →
            </button>
          </div>
        </div>

        <div className="flex w-full ml-10 gap-16">

          {/* Products Section */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4">PRODUCTS</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-600">Reo Flakes</a></li>
                    <li><a href="#" className="hover:text-gray-600">Reo Yarn</a></li>
                    <li><a href="#" className="hover:text-gray-600">Reo Yarn</a></li>
                  </ul>
                </div>

                {/* Technology Section */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4">TECHNOLOGY</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-600">FixDye</a></li>
                    <li><a href="#" className="hover:text-gray-600">BioCulus</a></li>
                  </ul>
                </div>

                {/* About Us Section */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4">ABOUT US</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-600">Our Process</a></li>
                    <li><a href="#" className="hover:text-gray-600">Company</a></li>
                    <li><a href="#" className="hover:text-gray-600">Sustainability</a></li>
                    <li><a href="#" className="hover:text-gray-600">Newsroom</a></li>
                    <li><a href="#" className="hover:text-gray-600">Team</a></li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4">CONTACT</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-600">Instagram</a></li>
                    <li><a href="#" className="hover:text-gray-600">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-gray-600">Mail</a></li>
                  </ul>
                </div>

        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 pt-8 text-[20px]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <Image src="/logo_black.png" alt="" width={500} height={300} />
            <p className="text-gray-300 mt-2">© 2024 REO ECO</p>
          </div>
            <div className="flex space-x-6 text-gray-300 justify-end items-end">
              <a href="#" className="hover:text-gray-400">Manage Cookie preferences</a>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Use</a>
            </div>
        </div>
      </div>
    </footer>
  )
}

