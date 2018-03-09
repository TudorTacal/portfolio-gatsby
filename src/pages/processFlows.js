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
                <CoverImage src={ProcessFlowsCoverImage}  />
            </div>
        )
    }
}) 

export default ProcessFlows;