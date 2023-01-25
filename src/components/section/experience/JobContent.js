import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { jobs } from '../../../content/jobdata'
import { CSSTransition } from 'react-transition-group'
import sr, { srConfig } from '../../../utils/srConfig'

const JobContent = (props) => {
    const currentTab = parseInt(props.currentTab) || 0;
    const revealContainer = useRef(null);
    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig(500))
    }, [])
    return (
        <Container ref={revealContainer}>
            {jobs.map((job, i) => (
                <CSSTransition key={i} in={currentTab === i} timeout={250}
                    classNames="fade">
                    <JobCard show={currentTab === i} className='flex-column'
                        id={`panel-${i}`}
                        role="tabpanel"
                        tabIndex={currentTab === i ? '0' : '-1'}
                        aria-labelledby={`tab-${i}`}
                        aria-hidden={currentTab !== i}
                        hidden={currentTab !== i}>
                        <SubHeader><h3 className='lgray'>{job.title} <span className='green'>@ <a href={job.link} aria-label={`Click to view my project ${job.linkText}`} className='green hover-line' target="_blank" rel="noopener noreferrer"> {job.linkText}</a></span></h3></SubHeader>
                        <Duration>{job.date}</Duration>
                        <ContentList className='flex-column'>
                            {job.description.map((item, index) => {
                                return <li key={index}>
                                    <p>{item}</p>
                                </li>
                            })}
                        </ContentList>
                    </JobCard>
                </CSSTransition>)
            )}
        </Container >
    )
}

export default JobContent

const Container = styled.div`
    padding: .5rem .8rem;
    gap: .5rem; 
    width: 100%;
    height: auto;
    min-height: 500px;
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
const JobCard = styled.div`
    display: ${props => (props.show ? "flex" : "none")};
    gap: .5rem;
`