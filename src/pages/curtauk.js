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
                    Contrained by the confidential nature of the work I've done
                    at Lexis Nexis, unfortunately I can't post any screenshots of the app
                    or the code at this time. But I will try to use words as best as I can.
                    </p>
                    <p>
                    CurtaUK was 
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