import { Caption, BaseFont, SubHeading } from '@typography';
import { CopyIcon, } from '@svg';

export function PasswordHistory({ passwordList }) {
    return (
        <div className='flex flex-col md:gap-6 gap-4 md:mt-0 mt-6'>
            <SubHeading className="text-white"> PASSWORD HISTORY</SubHeading>
            <div className='overflow-auto md:max-h-[399px] max-h-[199px] m-auto md:m-0'>
                {passwordList?.map((pass) =>
                    <div className='flex lg:gap-8 gap-4 mb-4' key={pass}>
                        <div className='text-white'>
                            <BaseFont>{pass?.slice(0, 20)}</BaseFont>
                            <Caption>{pass?.slice(20)}</Caption>
                        </div>
                        <div className='lg:block hidden'>
                            <CopyIcon size={24} />
                        </div>
                        <div className='lg:hidden block'>
                            <CopyIcon size={18} />
                        </div>
                    </div>)}
            </div>
            <BaseFont className="text-primary self-center">Clear history</BaseFont>
        </div>
    )
}
