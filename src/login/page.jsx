import React from 'react'
import Formlogin from '../components/Formlogin'

const LoginPage = () => {
    const name = { img: '/public/TSU.png', head:'ระบบสารสนเทศ มหาวิทยาลัยทักษิณ : mis.tsu.ac.th'}
    return (
  
      <section className=" dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 overflow-auto">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-md font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {name.head}
                            </h1>
                        <img src={name.img} />
                        <Formlogin />
                  </div>
              </div>
          </div>
            </section>
 
  )
}

export default LoginPage