import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import ProfileImage from '../img/gabrieladorf.svg'
import AboutLogo from '../img/AboutLogo.svg'

const ProfileImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${AboutLogo});
  background-size: cover;
  background-position: 20% 22%;
  height: 280px;
  @media (min-width: 768px) {
    background-position: 60% center;
    border: none;
    height: 470px;
  }
  @media (min-width: 1400px) {
    border: none;
  }
`

export default class About extends React.Component {
  render() {
    return (
      <Row alignItems="flex-end">
        <Column xs={12} sm={12} smShift={0} md={6} lg={5} lgShift={1}>
          <ProfileImageWrapper />
        </Column>
        <Column xs={12} sm={12} smShift={0} md={6} lg={5}>
          <h2>About</h2>
          <ColorBar color="#FFA6A6" />
          <p>
            <strong>
              Hi. I'm Tudor, a software engineer based 
              in&nbsp;London.
            </strong>
          </p>
          <p>
            I am a software engineer with a passion for business.
            I build and delivery high-performance web applications using Agile methodologies and Lean principles. 
          </p>
          <p style={{ marginBottom: 0 }}>
            Although my heart lies with ReactJs, I find myself doing more DevOps work,
            creating infrastructure and pipelines to deliver the products in the hands of the users. 
            Recently I've taken a huge interest in the blockchain and everything related. 
          </p>
        </Column>
      </Row>
    )
  }
}
