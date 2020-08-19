import React, { FC } from "react";
import { SafeAreaView, StatusBar, Button } from "react-native";
import styled from "styled-components/native";

import {
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../router";

const ScrollView = styled.ScrollView`
  background-color: white;
`;

const Body = styled.View`
  background-color: white;
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0 24px;
`;

const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: black;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: black;
`;

const Highlight = styled.Text`
  font-weight: 700;
`;

const ButtonContainer = styled.View`
  margin: 35px;
`;

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Body>
          <SectionContainer>
            <Title>Welcome to RNQS</Title>
            <SectionDescription>
              An simple React Native Quick Start by <Highlight>4t4sh</Highlight>
              . Below you can find a small summary of the characteristics of
              this boilerplate and how to use it.
            </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Characteristics</SectionTitle>
            <SectionDescription>
              - React Native 0.63 + TypeScript
            </SectionDescription>
            <SectionDescription>- Styled Components</SectionDescription>
            <SectionDescription>- React Navigation</SectionDescription>
            <SectionDescription>
              - ESLint and Prettier configured
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
            <SectionTitle>Navigation</SectionTitle>
            <SectionDescription>
              This project uses React Navigation, you can try it right now by
              clicking the button below!
            </SectionDescription>
            <ButtonContainer>
              <Button
                color="#841584"
                title="Click me 🦆"
                onPress={() => navigation.navigate("About")}
              />
            </ButtonContainer>
          </SectionContainer>
        </Body>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default WelcomeScreen;
