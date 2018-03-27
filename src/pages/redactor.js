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

const Redactor = () => ({
    render() { 
        return (
            <div>
                <Header title="The Redactor" />
                <ContentWrapper>
                <p style={{fontStyle: "italic"}}>
                Contrained by the confidential nature of the work I've done
                at Lexis Nexis, unfortunately I can't post any screenshots of the app
                or the code at this time. But I will try to use words as best as I can.
                </p>
                <p>
                The Redactor is a cutting edge solution designed to automate a redaction's team
                process by using machine learning and AI. Currently law firms have special
                redaction team's that have to manually redact a number of contracts using black
                markers or tools like Excel.
                </p>
                <p>
                The project was kickstared by data scientists from ThoughtWorks and was gradually
                taken over by Lexis Nexis colleagues. It uses the Stanford NLP model that we trained.
                To do the job, we built 3 applications as follows: Joan, Inigo and Butler all named after 
                scientists and philosophers :)
                </p>
                <p>
                Joan - front end React, Redux, TypeScript.
                Inigo - ASP.NET Core backend that loads the frontend and comunicates with 
                Butler - Java API that uses Aspose to create a list of redacted words that
                is sent to Inigo and rendered by Joan.
                </p>
                <p style={{fontStyle: "italic"}}>
                A full description coming soon.
                </p>
                </ContentWrapper>
            </div>
        )
    }
}) 

export default Redactor