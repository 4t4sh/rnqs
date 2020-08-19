/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const ScrollView = styled.ScrollView`
  background-color: white;
`;

const Engine = styled.View`
  position: 'absolute';
  right: 0;
`;

const FooterText = styled.Text`
  color: black;
  font-size: 12;
  font-weight: 600px;
  padding: 4;
  padding-right: 12;
  text-align: right;
`;

const Body = styled.View`
  background-color: white;
`;

const SectionContainer = styled.View`
  margin-top: 32;
  padding: 0 24px;
`;

const SectionTitle = styled.Text`
  font-size: 24;
  font-weight: 600px;
  color: black;
`;

const SectionDescription = styled.Text`
  margin-top: 8;
  font-size: 18;
  font-weight: 400px;
  color: black;
`;

const Highlight = styled.Text`
  font-weight: 700px;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <Engine>
              <FooterText>Engine: Hermes</FooterText>
            </Engine>
          )}
          <Body>
            <SectionContainer>
              <SectionTitle>Step One</SectionTitle>
              <SectionDescription>
                Edit <Highlight>App.tsx</Highlight> to change this screen and
                then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
