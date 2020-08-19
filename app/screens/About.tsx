import React, {FC} from 'react';
import {SafeAreaView, StatusBar, Button} from 'react-native';
import styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router';

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
  font-size: 35px;
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

type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>;

type AboutScreenProps = {
  navigation: AboutScreenNavigationProp;
};

const AboutScreen: FC<AboutScreenProps> = ({navigation}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Body>
          <SectionContainer>
            <Title>And this is an About screen</Title>
            <SectionDescription>
              This is it, you can go back with a gesture, from the control of
              the navigation bar or clicking the button bellow,{' '}
              <Highlight>you decide.</Highlight>
            </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <ButtonContainer>
              <Button
                color="#841584"
                title="Go back men 💃🏻"
                onPress={() => navigation.goBack()}
              />
            </ButtonContainer>
          </SectionContainer>
        </Body>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default AboutScreen;
