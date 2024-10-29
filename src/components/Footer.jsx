import { BaseFont, Caption } from '@typography';

export function Footer() {
    return (
        <div className='flex gap-6 items-center'>
            <a href="https://github.com/haris-75" target="_blank">
                <div className='flex gap-2 cursor-pointer'>
                    <BaseFont className='font-tomorrow font-semibold text-secondary'>@harisbinejaz75</BaseFont>
                </div>
            </a>
            <span className='font-normal text-white'>|</span>
            <Caption className='text-white uppercase'> {"I make frontend devlopment look easy :)"}</Caption>
        </div>
    )
}
