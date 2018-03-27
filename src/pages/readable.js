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

const Readable = () => ({
    render() { 
        return (
            <div>
                <Header title="Readable" />
                <ContentWrapper>
                    <p style={{fontStyle: "italic"}}>under construction</p>
                    <p>
                    For more details about this project please visit the 
                    following Github link https://github.com/TudorTacal/udacityND-Readable 
                    </p>
                    <p style={{fontStyle: "italic"}}>
                    A full description coming soon.
                    </p>
                </ContentWrapper>
            </div>
        )
    }
}) 

export default Readable