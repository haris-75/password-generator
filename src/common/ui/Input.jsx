import { PasswordIcon, SyncIcon } from '@svg';


export const Input = ({
    value,
    placeholder,
    onChange,
    // disabled = false,
    // className = '',
    id,
    // required = false,
    // error = '',
}) =>
    <div className="flex flex-col gap-1 relative border-secondary border-[1px] md:max-w-[550px]">
        <input
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            // disabled={disabled}
            // required={required}
            className="bg-secondaryBlack px-4 py-2.5 text-base font-tomorrow font-normal tracking-[8px] text-secondary"
            placeholder={placeholder}
        />
        <div className='absolute flex right-[16px] gap-2 top-[10px]'>
            <PasswordIcon />
            <SyncIcon />
        </div>
    </div>
