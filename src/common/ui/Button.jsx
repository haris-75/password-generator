import { cn } from '@utils'

export function Button({ onClick, children, className }) {

    return (
        <button className={cn(' my-4 relative bg-primary font-semibold lg:text-base text-xs tracking-[8px] uppercase font-tomorrow lg:py-4 lg:px-8 py-2 px-4 border-r-[1px] border-warning flex space-between lg:gap-6 md:gap-2 gap-8', className)}
            onClick={onClick}
        >
            <div className='w-[20px] h-[20px] bg-black absolute rotate-45 -left-[10px] -bottom-[10px]' />
            {children}
        </button>
    )
}
