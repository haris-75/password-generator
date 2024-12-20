import { cn } from '@utils'

export const MainHeading = ({ children, className }) =>
    <h1 className={cn('text-[40px] leading-10 font-bold font-tomorrow tracking-[8px]', className)}>
        {children}
    </h1>

export const SubHeading = ({ children, className }) =>
    <h3 className={cn('md:text-xl text-base font-semibold font-tomorrow tracking-[8px]', className)}>
        {children}
    </h3>


export const BaseFont = ({ children, className }) =>
    <p className={cn("lg:text-base text-xs font-normal font-tomorrow tracking-[8px]", className)} >
        {children}
    </p>


export const Caption = ({ children, className }) =>
    <p className={cn("lg:text-xs text-[10px] font-normal font-barlow tracking-[2px]", className)}>
        {children}
    </p>



export const Chip = ({ children, className }) =>
    <span className={cn("text-[8px] font-normal font-barlow", className)}>
        {children}
    </span>