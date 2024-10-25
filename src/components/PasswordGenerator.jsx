import { CHECKBOX_LIST } from '@constants';
import { ArrowIcon } from '@svg';
import { Button, Checkbox, Input, Slider } from '@ui';
import { useEffect, useState } from 'react';

export function PasswordGenerator() {
    const [checkboxObj, setCheckboxObj] = useState({ ...CHECKBOX_LIST });
    const [password, setPassword] = useState('');
    const onChangeHandler = (e, id) => setCheckboxObj({ ...checkboxObj, [id]: { value: e.target.checked, label: checkboxObj?.[id]?.label } });
    const [sliderValue, setSliderValue] = useState(5);
    useEffect(() => {
        console.log('onChangeHandler', sliderValue)
    }, [sliderValue])
    return (
        <div>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <Button variant='primary'> Copy Password_ <ArrowIcon color='black' /></Button>
            <Slider
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                id="password-slider"
                name="password-slider"
            />
            <div className='grid grid-cols-2 grid-row-2'>
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
