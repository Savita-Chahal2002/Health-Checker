import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CheckerContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${props => props.theme.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const QuestionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Select = styled.select`
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
  padding: 1.5rem;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
`;

const bodyPartQuestions = {
  heart: [
    {
      question: 'Do you experience chest pain?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you feel shortness of breath?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you have irregular heartbeat?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
  ],
  lungs: [
    {
      question: 'Do you experience difficulty breathing?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you have a persistent cough?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you experience wheezing?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
  ],
  brain: [
    {
      question: 'Do you experience frequent headaches?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you have memory problems?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you experience dizziness?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
  ],
  liver: [
    {
      question: 'Do you experience abdominal pain?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you have yellowing of skin or eyes?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you experience fatigue?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
  ],
  kidneys: [
    {
      question: 'Do you experience back pain?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you have changes in urination?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you experience swelling in legs?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
  ],
  stomach: [
    {
      question: 'Do you experience stomach pain?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you have digestive issues?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
    {
      question: 'Do you experience nausea?',
      options: ['Never', 'Sometimes', 'Often', 'Always'],
    },
  ],
};

const bodyPartRecommendations = {
  heart: {
    low: 'Your heart health seems good. Maintain a healthy lifestyle with regular exercise and a balanced diet.',
    medium: 'You may have some heart-related concerns. Consider consulting a healthcare professional and maintain a heart-healthy lifestyle.',
    high: 'Please consult a healthcare professional immediately. Your symptoms may indicate serious heart conditions.',
  },
  lungs: {
    low: 'Your lung health appears good. Continue to avoid smoking and maintain good air quality in your environment.',
    medium: 'You may have some lung-related concerns. Consider consulting a healthcare professional and avoid smoking or exposure to pollutants.',
    high: 'Please consult a healthcare professional immediately. Your symptoms may indicate serious lung conditions.',
  },
  brain: {
    low: 'Your brain health seems good. Maintain mental stimulation and a healthy lifestyle.',
    medium: 'You may have some brain-related concerns. Consider consulting a healthcare professional and maintain brain-healthy habits.',
    high: 'Please consult a healthcare professional immediately. Your symptoms may indicate serious neurological conditions.',
  },
  liver: {
    low: 'Your liver health appears good. Maintain a healthy diet and avoid excessive alcohol consumption.',
    medium: 'You may have some liver-related concerns. Consider consulting a healthcare professional and maintain liver-healthy habits.',
    high: 'Please consult a healthcare professional immediately. Your symptoms may indicate serious liver conditions.',
  },
  kidneys: {
    low: 'Your kidney health seems good. Stay hydrated and maintain a balanced diet.',
    medium: 'You may have some kidney-related concerns. Consider consulting a healthcare professional and maintain kidney-healthy habits.',
    high: 'Please consult a healthcare professional immediately. Your symptoms may indicate serious kidney conditions.',
  },
  stomach: {
    low: 'Your digestive health appears good. Maintain a balanced diet and regular eating habits.',
    medium: 'You may have some digestive concerns. Consider consulting a healthcare professional and maintain digestive-healthy habits.',
    high: 'Please consult a healthcare professional immediately. Your symptoms may indicate serious digestive conditions.',
  },
};

function BodyPartChecker() {
  const { bodyPart } = useParams();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = Object.values(answers).reduce((acc, val) => {
      const scoreMap = { 'Never': 0, 'Sometimes': 1, 'Often': 2, 'Always': 3 };
      return acc + scoreMap[val];
    }, 0);

    const maxScore = Object.keys(answers).length * 3;
    const percentage = (score / maxScore) * 100;

    let riskLevel;
    if (percentage < 33) {
      riskLevel = 'low';
    } else if (percentage < 66) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'high';
    }

    setResult({
      riskLevel,
      recommendation: bodyPartRecommendations[bodyPart][riskLevel],
    });
  };

  const handleAnswerChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  return (
    <CheckerContainer>
      <h2>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Health Check</h2>
      <Form onSubmit={handleSubmit}>
        {bodyPartQuestions[bodyPart].map((q, index) => (
          <QuestionGroup key={index}>
            <Label>{q.question}</Label>
            <Select
              value={answers[q.question] || ''}
              onChange={(e) => handleAnswerChange(q.question, e.target.value)}
              required
            >
              <option value="">Select an option</option>
              {q.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </QuestionGroup>
        ))}
        <Button type="submit">Get Results</Button>
      </Form>

      {result && (
        <Result>
          <h3>Assessment Results</h3>
          <p>Risk Level: {result.riskLevel.toUpperCase()}</p>
          <p>{result.recommendation}</p>
        </Result>
      )}
    </CheckerContainer>
  );
}

export default BodyPartChecker; 