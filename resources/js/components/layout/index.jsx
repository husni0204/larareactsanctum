import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'

const Layout = (props) => {
    const { children, pageTitle } = props
    return (
        <>
            <Helmet>
                <title>{`SMK BHINNEKA | ${pageTitle}`}</title>
                <meta charSet="utf-8" name="description" content="Website SMK Bhinneka Karawang" />
            </Helmet>
            <div>
                <NavBar />
                <div className="container shadow-lg p-3 bg-body rounded min-vh-100 d-flex flex-column">
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Layout