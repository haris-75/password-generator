import { SpeakerIcon } from '@svg';
import { BaseFont, Caption } from '@typography';

export function Footer() {
    return (
        <div className='flex gap-6 items-center'>
            <div className='flex gap-2'>
                <SpeakerIcon />
                <BaseFont className='font-tomorrow font-semibold text-secondary'>ENABLE AUDIO</BaseFont>
            </div>
            <span className='font-normal text-white'>|</span>
            <Caption className='text-white uppercase'> Keyboard Shortcuts Source Code Author</Caption>
        </div>
    )
}
