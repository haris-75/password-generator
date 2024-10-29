import { Footer, PasswordGenerator, PasswordHistory, ToastComponent } from '@components'
import { MainHeading } from '@typography'
import { useState } from 'react';

function App() {
  const [passwordList, setPasswordList] = useState([]);
  return (
    <div className='bg-black w-screen h-screen'>
      <div className='xl:px-16 xl:py-12 md:px-12 md:py-10 px-6 py-4 m-auto max-w-[1440px] bg-black'>
        <div className='m-auto lg:w-fit'>
          <div>
            <MainHeading className='text-primary'>PASSWORD</MainHeading>
            <MainHeading className='text-primary'>GENERATOR</MainHeading>
          </div>
          <div className='flex md:flex-row flex-col lg:p-4 py-7 xl:gap-38 lg:gap-12 md:gap-8 gap-4 lg:w-fit w-full'>
            <PasswordGenerator passwordList={passwordList} setPasswordList={setPasswordList} />
            <PasswordHistory passwordList={passwordList} setPasswordList={setPasswordList} />
          </div>
          <Footer />
        </div>
      </div>
      <ToastComponent />
    </div>
  )
}

export default App
