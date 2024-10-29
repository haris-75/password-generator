import { CHECKBOX_LIST } from '@constants';
import { ArrowIcon } from '@svg';
import { Button, Checkbox, Input, Slider } from '@ui';
import { copyToClipboard, generatePass } from '@utils';
import { useState } from 'react';
import { toast } from 'react-toastify';

export function PasswordGenerator({ setPasswordList, passwordList }) {
    const [checkboxObj, setCheckboxObj] = useState({ ...CHECKBOX_LIST });
    const [password, setPassword] = useState('');
    const onChangeHandler = (e, id) => setCheckboxObj({ ...checkboxObj, [id]: { value: e.target.checked, label: checkboxObj?.[id]?.label } });
    const [sliderValue, setSliderValue] = useState(0);

    const sliderValueHandler = (value) => {
        setSliderValue(value);
        const pass = generatePass(value, {
            uppercase: checkboxObj?.uppercase?.value,
            lowercase: checkboxObj?.lowercase?.value,
            numbers: checkboxObj?.numbers?.value,
            symbols: checkboxObj?.symbols?.value
        });
        setPassword(pass);
    }

    const setPasswordHandler = () => {
        if (password) {
            setPasswordList([...passwordList, password]);
            setPassword('');
            toast('Password Added to History')
        }
    }

    const disableCheckbox = Object.values(checkboxObj)?.map(({ value }) => value)?.filter(value => value)?.length <= 1;

    const clearPasswordHandler = () => setPassword("");

    return (
        <div className='flex flex-col md:gap-10 gap-6 lg:w-fit w-full'>
            <div>
                <Input className="mr-[72px] pr-0" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' clearHandler={clearPasswordHandler} />
                <Button variant='primary' onClick={() => copyToClipboard(password)}> Copy Password_
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
                    onChange={(e) => sliderValueHandler(e.target.value)}
                    id="password-slider"
                    name="password-slider"
                    onBlur={setPasswordHandler}
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
                        disabled={disableCheckbox}
                    />
                )}
            </div>

        </div>
    )
}
