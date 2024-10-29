import { PasswordIcon, SyncIcon } from '@svg';
import { calculatePasswordStrength, cn } from '@utils';


export const Input = ({
    value,
    placeholder,
    onChange,
    className,
    id,
    clearHandler
}) =>
    <div className="flex flex-col gap-1 relative border-secondary border-[1px] w-full bg-secondaryBlack">
        <input
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            className={cn("bg-secondaryBlack px-4 py-2.5 text-base font-tomorrow font-normal tracking-[8px] text-secondary", className)}
            placeholder={placeholder}
        />
        <div className='absolute flex right-[16px] gap-2 top-[10px]'>
            <div className='cursor-pointer' onClick={clearHandler}> <PasswordIcon strength={calculatePasswordStrength(value)} /> </div>
            <div className='cursor-pointer' onClick={clearHandler}> <SyncIcon /> </div>
        </div>
    </div>
