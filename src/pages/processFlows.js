import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'

import CoverImage from '../components/article/coverimage'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import TwoImage from '../components/article/twoimage'
import LargeImage from '../components/article/largeimage'
import FullSizeImage from '../components/article/fullsizeimage'

import KellerkindCoverImage from '../img/articles/kellerkind/kellerkindCover.jpg'
import ProcessFlowsCoverImage from '../img/articles/processFlows/test.png';

const ProcessFlows = () => ({
    render() { 
        return (
            <div>
                <Header title="Process Flows" />
                <ContentWrapper>
                    <p style={{fontStyle: "italic"}}>under construction</p>
                    <p>
                    Constrained by the confidential nature of the work done
                    at Lexis Nexis, unfortunately, I can't post any screenshots of the app
                    or the code at this time. But I will try to use words as best as I can.
                    </p>
                    <p>
                    ProcessFlows is a visualisation tool built to improve a 
                    lawyer's working processes. 
                    </p>
                    <p>
                    The technologies used to build the app were ReactJS & Redux, ASP.NET Core
                    and AWS. We created a CI/CD pipeline all the way to production managed by Jenkins.
                    </p>
                    <p>
                    The project was lead by ThoughtWorks and was built as a microservice
                    that was integrated with a monolith called Lexis Advance. Besides delivering
                    a cool new feature the project was meant to prove the concept and set up a 
                    new way of building & delivering projects in the London office. 
                    </p>
                    <p style={{fontStyle: "italic"}}>
                    A full description coming soon.
                    </p>
                </ContentWrapper>
            </div>
        )
    }
}) 

export default ProcessFlows;