import { Caption, BaseFont, SubHeading } from '@typography';
import { CopyIcon, } from '@svg';

export function PasswordHistory({ passwordList }) {
    return (
        <div className='flex flex-col md:gap-6'>
            <SubHeading className="text-white"> PASSWORD HISTORY</SubHeading>
            {passwordList?.map((pass) =>
                <div className='flex md:gap-8' key={pass}>
                    <div className='text-white'>
                        <BaseFont>{pass?.slice(0, 20)}</BaseFont>
                        <Caption>{pass?.slice(20)}</Caption>
                    </div>
                    <CopyIcon />
                </div>)}
            <BaseFont className="text-primary">Clear history</BaseFont>
        </div>
    )
}
