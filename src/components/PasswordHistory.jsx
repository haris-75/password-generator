import { Caption, BaseFont, SubHeading } from '@typography';
import { CopyIcon, NoData, } from '@svg';
import { copyToClipboard } from '@utils';
import ClearImg from '@assets/clear.png'

export function PasswordHistory({ passwordList, setPasswordList }) {
    return (
        <>
            {!passwordList?.length ?
                <div className='flex flex-col justify-center m-auto items-center'>
                    <NoData />
                    <BaseFont className='text-primary'>No Passwords to Show</BaseFont>
                </div> :
                <div className='flex flex-col md:gap-6 gap-4 md:mt-0 mt-6 w-1/2'>
                    <div className='flex justify-between items-center'>
                        <SubHeading className="text-white"> PASSWORD HISTORY</SubHeading>
                        <div className='cursor-pointer flex items-center' title='clear history' onClick={() => setPasswordList([])}>
                            <img className='w-[28px]' src={ClearImg} />
                            <Caption className='font-barlow text-primary text-[14px]'>Clear</Caption>
                        </div>
                    </div>
                    <div className='overflow-auto md:h-[399px] h-[199px] m-auto md:m-0'>
                        {passwordList?.map((pass) =>
                            <div className='flex lg:gap-8 gap-4 mb-4 justify-between' key={pass}>
                                <div className='text-white'>
                                    <BaseFont>{pass?.slice(0, 20)}</BaseFont>
                                    <Caption>{pass?.slice(20)}</Caption>
                                </div>
                                <div onClick={() => copyToClipboard(pass)}>
                                    <div className='lg:block hidden cursor-pointer'>
                                        <CopyIcon size={24} />
                                    </div>
                                    <div className='lg:hidden block cursor-pointer'>
                                        <CopyIcon size={18} />
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>}
        </>
    )
}
