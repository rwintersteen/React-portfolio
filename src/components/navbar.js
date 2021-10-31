import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import About from "/aboutMe";
import ProjectCards from "/projects";
import Contact from "/contact";
import Resume from "/downloadResume";

function NavTabs {
  return (
    <div className="container">
      <Tabs>
      <TabList>
          <Tab >About Me</Tab>
          <Tab >Projects</Tab>
          <Tab >Contact Me</Tab>
          <Tab >Download Resume</Tab>
      </TabList>

      <TabPanel>
        <About />
      </TabPanel>

      <TabPanel>
        <ProjectCards />
      </TabPanel>

      <TabPanel>
        <Contact />
      </TabPanel>

      <TabPanel>
        <Resume />
      </TabPanel>

      </Tabs>
  )
}