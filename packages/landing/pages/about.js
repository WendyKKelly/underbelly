import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/agencyDigital';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/AgencyDigital/Navbar';
import About from '../containers/AgencyDigital/About';

import Footer from '../containers/AgencyDigital/Footer';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Underbelly Project</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Underbelly project" />

          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          />

        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

           <About />


          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
