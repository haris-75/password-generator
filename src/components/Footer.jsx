import { BaseFont, Caption } from '@typography';

export function Footer() {
    return (
        <div className='flex md:flex-row flex-col  gap-6 items-center mt-12'>
            <a href="https://github.com/haris-75" target="_blank">
                <div className='flex gap-2 cursor-pointer'>
                    <BaseFont className='font-tomorrow font-semibold text-secondary'>@harisbinejaz75</BaseFont>
                </div>
            </a>
            <div className='flex gap-6 items-center'>
                <span className='font-normal text-white hidden md:flex'>|</span>
                <Caption className='text-white uppercase'> {"I make frontend devlopment look easy :)"}</Caption></div>
        </div>
    )
}
