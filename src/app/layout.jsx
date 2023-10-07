import React from 'react'
import './global.css'
import Header from '@/components/Header'

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default Layout
