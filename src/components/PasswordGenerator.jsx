import { CHECKBOX_LIST } from '@constants';
import { ArrowIcon } from '@svg';
import { Button, Checkbox, Input, Slider } from '@ui';
import { useState } from 'react';

export function PasswordGenerator() {
    const [checkboxObj, setCheckboxObj] = useState({ ...CHECKBOX_LIST });
    const [password, setPassword] = useState('');
    const onChangeHandler = (e, id) => setCheckboxObj({ ...checkboxObj, [id]: { value: e.target.checked, label: checkboxObj?.[id]?.label } });
    const [sliderValue, setSliderValue] = useState(5);
    return (
        <div className='flex flex-col md:gap-10 gap-6 lg:w-fit w-full'>
            <div>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <Button variant='primary'> Copy Password_
                    <div className='lg:block hidden'>
                        <ArrowIcon color='black' size={24} />
                    </div>
                    <div className='lg:hidden block'>
                        <ArrowIcon color='black' size={18} />
                    </div>
                </Button>
            </div>
            <div>
                <Slider
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    id="password-slider"
                    name="password-slider"
                />
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 grid-row-2 xl:gap-8 gap-6'>
                {Object.keys(checkboxObj)?.map((id) =>
                    <Checkbox
                        key={id}
                        checked={checkboxObj?.[id]?.value}
                        onChange={(e) => onChangeHandler(e, id)}
                        label={checkboxObj?.[id]?.label}
                        id={id}
                    />
                )}
            </div>

        </div>
    )
}
