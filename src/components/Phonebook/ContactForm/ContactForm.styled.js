import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
`;

export const Span = styled.span`
  display: block;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 10px auto 0 auto;
  padding: 5px 10px;
  display: block;
  border-radius: 10px;

  font-size: 1em;
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px 10px;
  display: block;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;

      background: rgba(42, 165, 187, 0.974);
    border-radius: 5px;
  border-radius: 5px;
  border: 0 solid;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.08),
        0px 2px 2px rgba(0, 0, 0, 0.12);
  color: #fff;
  outline-color: hsla(0, 0%, 100%, 0.5);
  outline-offset: 0;
  position: relative;
  text-decoration: none;
  text-shadow: none;
  text-transform: uppercase;
  transition: all 1.25s cubic-bezier(0.19, 1, 0.22, 1);

  :hover {
    box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 50%),
      0 0 20px hsl(0deg 0% 100% / 20%);
  }
`;