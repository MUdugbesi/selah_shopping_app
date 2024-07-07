import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components'
import CardTabs from '../components/CardTab';



const RootLayout = () => {
    return (
        <div>
            <Header />
            <main className='mb-[200px] h-auto'>
                <Outlet />
                <CardTabs />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout