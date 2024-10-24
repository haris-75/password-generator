import { PasswordHistory } from '@components'
import { MainHeading } from '@typography'


function App() {
  const passList = ['^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj3', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj5', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj6', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj7', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj8', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj4', '^d3>~9YDA8s}cWN9L_P^WmZTy&82jQ$w1F2^fxj2'];
  return (
    <div className='bg-black w-screen h-screen md:p-16'>
      <MainHeading className='text-primary'>PASSWORD</MainHeading>
      <MainHeading className='text-primary'>GENERATOR</MainHeading>

      <PasswordHistory passwordList={passList} />

    </div>
  )
}

export default App
