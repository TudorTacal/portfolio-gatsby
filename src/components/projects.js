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
          {/* <Project
            logo={LifeTimeLogo()}
            url="/lifetime"
            title="LifeTime"
            abstract="A digital health solution facilitating medical data exchange."
          /> */}
           <Project
            logo={MyReadsLogo()}
            url="/myreads"
            title="MyReads"
            abstract="My reads is a React application that allows a user to categorize books in 3 different shelves: Currently Reading, Want to Read, Read."
          />
           <Project
            logo={""}
            url="/readable"
            title="Readable"
            abstract="Readable is a content and comment web app build with React and Redux."
          />
           <Project
            logo={""}
            url="/udacicards"
            title="UdaciCards"
            abstract="The UdaciCards project is a mobile application, designed for iOS, that allows users to study collections of flashcards."
          />
           <Project
            logo={""}
            url="/redactor"
            title="REDACTOR"
            abstract="A redaction tool built for law firms leveraging machine learning and AI. Front end app React & Redux, .NETCORE 2.0 backend, JAVA api, deployed on AWS."
          />
          <Project
            logo={""}
            url="/processflows"
            title="ProcessFlows"
            abstract="A visualisation tool designed for junior lawyers to navigate through their complex proccesses."
          />
          <Project
            logo={""}
            url="/curtauk"
            title="CurtaUK"
            abstract="A completion statement complex calculator designed for lawyers."
          />
          <Project
            logo={""}
            url="/cabanabelvedere"
            title="CabanaBelvedere"
            abstract="A presentation website for a touristic villa, set in a spectacular natural place that is also my family's business."
          />
           <Project
            logo={""}
            url="/workflows"
            title="Workflows"
            abstract="Complex visualisation tools like editable checklist, related links container & navigational flowcharts meant to improve a lawyers workflow."
          />
        </Column>
      </Row>
    )
  },
})

export default Projects
