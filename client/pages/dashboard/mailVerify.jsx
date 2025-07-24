import EmailVerifyPage from '@/components/EmailVerify/EmailVerifyPage'
import React from 'react'
import DashboardLayout from '@/components/DashboardLayout';

const mailVerify = () => {
    return (
        <DashboardLayout>
            <div className='mt-[5%] w-full'>
                <EmailVerifyPage />
            </div>
            
        </DashboardLayout>
    )
}

export default mailVerify