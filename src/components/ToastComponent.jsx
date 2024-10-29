
import { ToastContainer } from 'react-toastify'

export function ToastComponent() {
    return (
        <ToastContainer
            className='font-tomorrow'
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
        />
    )
}
