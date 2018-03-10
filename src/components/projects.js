import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'

import Project from '../components/project'

import KellerkindLogo from '../img/kellerkindlogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'
import ProcessFlowsLogo from '../img/processFlowsLogo';
import MyReadsLogo from '../img/myReadsLogo';

const Projects = () => ({
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Projects</h2>
          <ColorBar color="#A6FFD7" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={LifeTimeLogo()}
            url="/lifetime"
            title="LifeTime"
            abstract="A digital health solution facilitating medical data exchange."
          />
           <Project
            logo={MyReadsLogo()}
            url="/myreads"
            title="MyReads"
            abstract=" My reads is a React application that allows a user to categorize books in 3 different shelves"
          />
          <Project
            logo={ProcessFlowsLogo()}
            url="/processflows"
            title="ProcessFlows"
            abstract="A visualisation tools designed for lawyers to improve their proccesses"
          />

        </Column>
      </Row>
    )
  },
})

export default Projects
