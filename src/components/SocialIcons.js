import { Fade } from 'react-reveal'
import styled from 'styled-components'
import socials from '../content/socials'
import React from 'react'

const SocialIcons = () => {
    // const isBrowser = () => typeof window !== "undefined"
    // const [width, setWidth] = useState(null);
    // function handleWindowSizeChange() {
    //     setWidth(isBrowser.innerWidth);
    // }
    function DelayTime(index) {
        // if (width < 768) {
        //     let temp = 100 * index;
        //     return parseInt(temp + 500);
        // }
        // else {
        let temp = 200 * index;
        return parseInt(temp + 4500);
        // }
    }
    // useEffect(() => {
    //     isBrowser?.addEventListener('resize', handleWindowSizeChange);
    //     return () => {
    //         isBrowser?.removeEventListener('resize', handleWindowSizeChange);
    //     }
    // }, []);
    const SocialIcons = socials.map((social, index) => {
        return <li key={index}>
            <a href={social.link} aria-label={social.ariaLabel} target="_blank" rel="noopener noreferrer">
                <Fade bottom delay={DelayTime(index)} >
                    <social.name name="socialIcons" />
                </Fade>
            </a>
        </li>
    })
    return (
        <Container>
            <Fade bottom delay={4300}>
                <List className='flex-column'>
                    {SocialIcons}
                </List>
            </Fade>
        </Container>
    )
}

export default SocialIcons

const Container = styled.div`
    position:fixed;
    bottom: 0;
    width: 4rem;
    left: 1rem;

    @media(max-width:768px){
        position:relative;
        margin: 2rem auto;
        left: 0;
        width:100%;
    }
`

const List = styled.ul`
    justify-content: center;
    align-items: center;
    gap: 1rem;

    /* li */
    .socialIcons{
        width:20px;
        height:20px;
        transition: transform 300ms ease;
        &:hover{
            color: var(--bg-green);
            transform: translateY(-5px);
            transition: transform 300ms ease;
        }
    }

    &:after{
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        background-color : var(--bg-gray);
    }

    @media(max-width:768px){
        flex-direction:row !important;
        gap:1.5rem;
        &::after{
            display:none;
        }
    }
`