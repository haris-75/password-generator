

export const Checkbox = ({
    label = '',
    checked = false,
    onChange,
    // disabled = false,
    // className = '',
    id,
    // required = false,
    // error = '',
}) =>
    <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    // disabled={disabled}
                    // required={required}
                    className="peer h-5 w-5 cursor-pointer appearance-none border border-primary 
                            checked:border-primary checked:bg-primary hover:border-secondary 
                            focus:outline-none focus:ring-1 focus:ring-gray focus:ring-offset-1 focus:ring-offset-black"
                />

                <div>{checked}</div>
            </div>
            {label && (
                <label
                    htmlFor={id}
                    className='text-base font-normal font-tomorrow tracking-[8px] text-white'
                >
                    {label}
                    {/* {required && <span className="ml-1 text-red-500">*</span>} */}
                </label>
            )}
        </div>
        {/* {
                error && (
                    <span className="text-sm text-red-500">{error}</span>
                )
            } */}
    </div>
