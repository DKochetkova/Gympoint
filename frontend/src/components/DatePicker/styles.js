import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  margin-bottom: 16px;

  > span:first-child {
    color: #e0042d;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    width: 100%;
    margin: 8px 0 4px;
    border-radius: 4px;
    transform: none;
    animation: fadeIn 350ms ease-in-out 1;

    @keyframes fadeIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  strong {
    font-weight: 700;
    color: #444;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`;

export const Picker = styled(ReactDatePicker)`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  padding: 0 15px;
`;
