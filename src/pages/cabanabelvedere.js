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

const CabanaBelvedere = () => ({
    render() { 
        return (
            <div>
                <Header title="Cabana Belvedere" />
                <ContentWrapper>
                    <p style={{fontStyle: "italic"}}>under construction</p>
                    <p>
                    This is a presentation web site I've created for my family business
                    in Colibita, Romania. We own and manage a touristic villa so I am trying
                    to bring my parents and this small business up to date, in the digital world.
                    </p>
                    <p>
                    See the project live @ www.cabanabelvederecolibita.ro 
                    </p>
                    <p style={{fontStyle: "italic"}}>
                    A full description coming soon.
                    </p>
                </ContentWrapper>
            </div>
        )
    }
}) 

export default CabanaBelvedere;