import React, { useState } from 'react';
import styled from 'styled-components';

const BMIContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${props => props.theme.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.theme.primary}dd;
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
  text-align: center;
`;

const BMICategory = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  color: ${props => {
    switch (props.category) {
      case 'Underweight':
        return '#ff9800';
      case 'Normal':
        return '#4caf50';
      case 'Overweight':
        return '#ff5722';
      case 'Obese':
        return '#f44336';
      default:
        return props.theme.text;
    }
  }};
`;

function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <BMIContainer>
      <h2>BMI Calculator</h2>
      <Form onSubmit={calculateBMI}>
        <InputGroup>
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Calculate BMI</Button>
      </Form>

      {bmi && (
        <Result>
          <h3>Your BMI: {bmi}</h3>
          <BMICategory category={category}>
            Category: {category}
          </BMICategory>
          <p>
            {category === 'Underweight' && 'You may need to gain weight. Consider consulting a nutritionist.'}
            {category === 'Normal' && 'Your weight is within a healthy range. Keep up the good work!'}
            {category === 'Overweight' && 'Consider making lifestyle changes to reach a healthier weight.'}
            {category === 'Obese' && 'It is recommended to consult a healthcare professional for guidance.'}
          </p>
        </Result>
      )}
    </BMIContainer>
  );
}

export default BMI; 