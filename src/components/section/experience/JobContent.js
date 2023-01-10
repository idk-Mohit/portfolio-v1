import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { jobs } from '../../../content/jobdata'
import { Fade } from 'react-reveal'

const JobContent = ({ currentTab }) => {
    const [currentJob, setCurrentJob] = useState([]);
    function ContentHandler(currentTab) {
        const data = jobs.map((job, index) => {
            if (index === parseInt(currentTab)) {
                return (
                    <Container key={index} className='flex-column'>
                        <Fade>
                            <SubHeader><h3 className='lgray'>{job.title} <span className='green'>@<a href={job.link} aria-label={`Click to view my project ${job.linkText}`} className='green' target="_blank" rel="noopener noreferrer"> {job.linkText}</a></span></h3></SubHeader>
                            <Duration>{job.date}</Duration>
                            <ContentList className='flex-column'>
                                {
                                    job.description.map((item, index) => {
                                        return <li key={index}>
                                            <p>{item}</p>
                                        </li>
                                    })
                                }
                            </ContentList>
                        </Fade>
                    </Container>
                )
            }
        })
        return data;
    }

    useEffect(() => {
        setCurrentJob(ContentHandler(currentTab));
    }, [currentTab])
    return (
        <>
            {currentJob}
        </>
    )
}

export default JobContent

const Container = styled.div`
    padding: .5rem .8rem;
    gap: .5rem; 
`
const ContentList = styled.ul`
    margin:.5rem 0;
    gap: .5rem;

    li{
        display: flex;

        &::before{
            content: "▹";
            color: var(--bg-green);
            margin: 5px 10px 0 0;
        }
    }
    
`
const SubHeader = styled.div`
    h3{
        font-size: 20px;
        font-weight: 500;
    }
`
const Duration = styled.div`
    font-size: 13px;
    color: var(--bg-gray);
    font-family: var(--font-mono-thin);
`
