import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Footer, Header, Loader, SocialIcons } from './index'

const Layout = ({ children, location }) => {
    // let location = window.location;
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    useEffect(() => {
        if (isLoading) {
            return;
        }
    }, [isLoading]);

    return (
        <>
            {isLoading && isHome ? (
                <Loader finishLoading={() => setIsLoading(false)} />
            ) : (
                <Container>
                    <Header />
                    <SocialIcons />

                    <div id="content">
                        {children}
                        <Footer />
                    </div>
                </Container>
            )}
        </>
    )
}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Layout

const Container = styled.div``