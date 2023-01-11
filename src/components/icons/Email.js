import React from 'react';

const IconEmail = ({ name }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-labelledby="title"
        aria-describedby="desc"
        role="img"
        fill="none"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={name}>
        <title>Mail</title>
        <path d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4" />
        <path d="M2 12h60v40H2z" />
    </svg>
)
export default IconEmail;