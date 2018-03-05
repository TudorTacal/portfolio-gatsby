import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Spirograph from '../components/spirograph'

const HeroSection = styled.div`height: 100vh;`

const FrontPageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const LogoWrapper = styled.div`
  color: #333;
  margin: 24px 0 0 0px;
  @media (min-width: 768px) {
    margin: 24px 0 0 24px;
  }
`

const Name = styled.h1`
  font-family: 'bebasneue', Helvetica, sans-serif;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0;
  @media (min-width: 500px) {
    font-size: 70px;
  }
  @media (min-width: 768px) {
    font-size: 80px;
    text-align: left;
  }
`

const Role = styled.div`
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`

const SocialIconWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 24px;
  }
`

const SocialIcon = styled.svg`
  margin: 0 4px 0 4px;
  @media (min-width: 768px) {
    margin-left: 8px;
  }
  fill: #333;
  :hover {
    fill: red;
  }
`

const SocialLink = styled.a``

const SpirographWrapper = styled.div``

const ArrowWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 32px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    bottom: 32px;
  }
  width: 100%;
`

const ArrowCenter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100px;
  height: 100px;
`

const ArrowLink = styled.a`display: block;`

const Arrow = styled.svg`
  visibility: hidden;
  fill: #dcdcdc;
  :hover {
    fill: #555;
  }
  @media (min-width: 500px) {
    visibility: visible;
  }
`

export default class Hero extends React.Component {
  render() {
    return (
      <HeroSection>
        <FrontPageHeader>
          <LogoWrapper>
            <Name>Tudor Tacal</Name>
            <Role>Software Craftsman</Role>
          </LogoWrapper>
          <SocialIconWrapper>
          <SocialLink href="https://www.linkedin.com/in/tudor-tacal-8b1400a4/">
              <SocialIcon
                width="50"
                height="48"
                viewBox="0 0 24 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
            <SocialLink href="https://twitter.com/Tudor_Tacal">
              <SocialIcon
                width="50"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.478 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.13-.477-4.402-1.292 1.524.18 3.045-.244 4.252-1.19-1.256-.022-2.317-.853-2.684-1.994.45.086.895.06 1.298-.05-1.38-.277-2.335-1.52-2.304-2.852.388.215.83.344 1.3.36-1.278-.856-1.64-2.545-.888-3.836 1.416 1.738 3.533 2.88 5.92 3-.42-1.795.944-3.526 2.8-3.526.824 0 1.57.35 2.095.907.654-.128 1.27-.368 1.824-.697-.214.67-.67 1.233-1.262 1.59.58-.07 1.135-.225 1.65-.454-.385.578-.87 1.084-1.434 1.49z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/tudortacal/">
              <SocialIcon
                width="48"
                height="48"
                viewBox="0 0 24 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
            <SocialLink href="mailto:tudortacal@gmail.com">
              <SocialIcon
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.566 7.37L12 12.594 5.433 7.37h13.133zm.01 9.22H5.425V8.748L12 13.978l6.575-5.23v7.842z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
          </SocialIconWrapper>
        </FrontPageHeader>
        <Spirograph />
        <ArrowWrapper>
          <ArrowCenter>
            <ArrowLink href="#about">
              <Arrow
                width="100"
                height="100"
                viewBox="-32 -40 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.647.064L-.01 5.72 18 23.73 36.01 5.72 30.352.065 18 12.417"
                  fillRule="nonzero"
                />
              </Arrow>
            </ArrowLink>
          </ArrowCenter>
        </ArrowWrapper>
      </HeroSection>
    )
  }
}
