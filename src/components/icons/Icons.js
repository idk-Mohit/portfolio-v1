import React from 'react';
import { IconEmail, IconExternal, IconGithub, IconLinkedin, IconClose } from '.';

const Icons = ({ name, close }) => {
    switch (name) {
        case 'github': return <IconGithub />
        case 'linkedin': return <IconLinkedin />
        case 'mail': return <IconEmail />
        case 'external': return <IconExternal />
        case 'close': return <IconClose close={close} />
        default: return <IconExternal />
    }
}

export default Icons