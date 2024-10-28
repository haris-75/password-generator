import { Footer, PasswordGenerator, PasswordHistory } from '@components'
import { MainHeading } from '@typography'


function App() {
  const passList = ['^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj3', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj5', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj6', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj7', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj8', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj4', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj2', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj3', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj5', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj6', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj7', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj8', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj4', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj2', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj3', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj5', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj6', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj7', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj8', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj4', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj2'];
  return (
    <div className='bg-black w-screen h-screen'>
      <div className='xl:px-16 xl:py-12 md:px-12 md:py-10 px-6 py-4 m-auto max-w-[1440px] bg-black'>
        <div className='m-auto lg:w-fit'>
          <div>
            <MainHeading className='text-primary'>PASSWORD</MainHeading>
            <MainHeading className='text-primary'>GENERATOR</MainHeading>
          </div>
          <div className='flex md:flex-row flex-col lg:p-10 py-7 xl:gap-40 lg:gap-12 md:gap-8 gap-4 lg:w-fit w-full'>
            <PasswordGenerator />
            <PasswordHistory passwordList={passList} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
