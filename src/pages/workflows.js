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

const Workflows = () => ({
    render() { 
        return (
            <div>
                <Header title="Workflows" />
                <ContentWrapper>
                    <p style={{fontStyle: "italic"}}>under construction</p>
                    <p>
                    Contrained by the confidential nature of the work I've done
                    at Lexis Nexis, unfortunately I can't post any screenshots of the app
                    or the code at this time. But I will try to use words as best as I can.
                    </p>
                    <p>
                    The Workflows team built a range of solutions like Editable Checklists,
                    Navigational Flowcharts and Related Links pod.
                    </p>
                    <p>
                    I joined this project straight after Process Flows was finished and my work
                    was focused more on the project management side because I became the team's 
                    Scrum Master during a period of big change towards agile methodologies
                    and lean principles.
                    </p>
                    <p>
                    I spent a short period of time in this time, implementing an in house
                    analytics library across all the team's projects. The technology stack was
                    vanilla Javascript, Piwik and Kibana.
                    </p>
                    <p>
                    Working closely with the Product Owner and the Product Manager, the work
                    surrounding the analytics started an office wide campaign that changed for
                    the better the way Lexis Nexis gathers and interprets user data. Going from
                    chaos to data driven business decisions.
                    </p>
                    <p style={{fontStyle: "italic"}}>
                    A full description coming soon.
                    </p>
                </ContentWrapper>
            </div>
        )
    }
}) 

export default Workflows