import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components'
import CardTabs from '../components/CardTab';
import { useSelector } from 'react-redux';



const RootLayout = () => {
    const products = useSelector(store => store.product.products);
    const [val, setVal] = useState('');
    const [filtered, setFiltered] = useState(products);

    useEffect(() => {
        const search = []
        products.forEach((product) => {
            const { keywords } = product;
            if (keywords) {
                if (keywords.includes(`${val}`)) {
                    search.push(product)
                }
            }
        })
        if (search.length && val) {
            setFiltered(search)
        } else {
            setFiltered(products)
        }
    }, [val])

    const handleInputVal = (e) => {
        const inputVal = e.target.value;
        setVal(inputVal.toLowerCase())
    }

    const handleClearSearch = () => {
        setVal('');
        setFiltered(products)
    }




    const handleSearchFilter = () => {
        const search = [];
        products.forEach((product) => {
            const { keywords } = product;
            if (keywords) {
                if (keywords.includes(`${val}`)) {
                    search.push(product)
                }
            }
        })
        if (search.length && val) {
            setFiltered(search)
        } else {
            setFiltered(products)
        }
    }

    return (
        <div>
            <Header val={val} handleInputChange={handleInputVal} handleSearchFilter={handleSearchFilter} handleClearSearch={handleClearSearch} />
            <main className='mb-[200px] h-auto'>
                <Outlet context={[filtered, setFiltered]} />
                <CardTabs />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout