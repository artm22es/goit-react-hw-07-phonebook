import { ErrorMessage, Form } from 'formik';
import styled from 'styled-components';

export const ContactFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > label {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > input {
      max-width: 200px;
      height: 25px;
      border-radius: 5px;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonForm = styled.button`
  max-width: 100px;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 10px;

  &:hover {
    background-color: gold;
  }
`;
