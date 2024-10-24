import { cn } from '@utils'

export function Button({ onClick, children, className }) {

    return (
        <button className={cn(' my-4 relative bg-primary font-semibold text-base tracking-[8px] uppercase font-tomorrow py-4 px-8 border-r-[1px] border-warning flex space-between', className)}
            onClick={onClick}
        >
            <div className='w-[20px] h-[20px] bg-black absolute rotate-45 -left-[10px] -bottom-[10px]' />
            {children}
        </button>
    )
}
