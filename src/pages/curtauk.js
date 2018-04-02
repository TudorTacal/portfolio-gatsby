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

const CurtaUK = () => ({
    render() { 
        return (
            <div>
                <Header title="Curta UK" />
                <ContentWrapper>
                    <p style={{fontStyle: "italic"}}>under construction</p>
                    <p>
                    Constrained by the confidential nature of the work done
                    at Lexis Nexis, unfortunately, I can't post any screenshots of the app
                    or the code at this time. But I will try to use words as best as I can.
                    </p>
                    <p>
                    CurtaUK was a really interesting project because our manager kicked it off
                    without too much notice. We were a team of 3 engineers, 1 tech lead and 2 juniors
                    at that time. Later in the project we got help from a BA but most of the project 
                    management was done by us.
                    </p>
                    <p>
                    The purpose of the project was to prove to the business that we can deliver a complex
                    calculator in around 3 months using a microservice architecture. Fortunately we had some 
                    existing code bases that we could use for the project spin off and the CI/CD pipelines. 
                    </p>
                    <p>
                    The tech used was ReactJS, ReduxJS, .Net Core 2 and AWS. We used Jenkis for the CI/CD server.
                    Fun but also very tiring, it as one of the best coding journeys whilst at Lexis. We literally
                    created a couple thousand lines of code in approximately 2.5 months using existing code and our own. 
                    </p>
                    <p>
                    The project only made it to a development environment and was parked at ~60% due to a change
                    in the companies direction.
                    </p>
                    <p style={{fontStyle: "italic"}}>
                    A full description coming soon.
                    </p>
                </ContentWrapper>
            </div>
        )
    }
}) 

export default CurtaUK;