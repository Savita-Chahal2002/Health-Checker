import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background-image: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

const AboutSection = styled.section`
  background-color: ${props => props.theme.secondary};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const BMIButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  &:hover {
    background-color: ${props => props.theme.primary}dd;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <h1>Welcome to Health Checker</h1>
        <p>Your comprehensive health assessment platform</p>
        <BMIButton to="/bmi">Calculate Your BMI</BMIButton>
      </HeroSection>

      <AboutSection>
        <h2>About Our Platform</h2>
        <p>
          Health Checker is a comprehensive health assessment platform designed to help you
          monitor and understand your health better. Our platform provides detailed health
          checks for different body parts, helping you identify potential health issues
          and take preventive measures.
        </p>
        <p>
          With our easy-to-use interface and detailed health reports, you can stay on top
          of your health and make informed decisions about your well-being.
        </p>
      </AboutSection>

      <FeaturesGrid>
        <FeatureCard>
          <h3>Body Part Analysis</h3>
          <p>Detailed health checks for different body parts with personalized recommendations.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>BMI Calculator</h3>
          <p>Calculate your Body Mass Index and get personalized health insights.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Health Recommendations</h3>
          <p>Get personalized health recommendations based on your assessment results.</p>
        </FeatureCard>
      </FeaturesGrid>
    </HomeContainer>
  );
}

export default Home; 