import React, { Component, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/global.css';
import PropTypes from 'prop-types'

import styled, { ThemeProvider } from 'styled-components';

import ThemeLight from '../themes/ThemeLight';
import ThemeDark from '../themes/ThemeDark';

import Icon from '../components/StyleSwitch';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
`

const Layout = ({ children }) => {

  let localIsDark;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false;
    } else {
      localIsDark = true;
    }
    console.log(localIsDark ? 'dark mode' : 'light mode');
  }

  const [isDark, setIsDark] = useState(localIsDark);

  return (
    <ThemeProvider theme={isDark ? ThemeDark : ThemeLight}>
      <Container>
        <NavigationBar menuLinks={config.menuLinks} />
        <div id="content-wrapper">{children}</div>

        <Icon isDark={isDark} setIsDark={setIsDark}/>
      </Container>
    </ThemeProvider>
  )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout