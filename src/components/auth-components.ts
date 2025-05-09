import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--dark-color);
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 20px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.8rem;
  &:focus {
    outline: none;
  }
  &[type="submit"] {
    font-weight: 600;
    background: var(--accent-color);
    color: var(--light-color);
    transition: opacity 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  color: var(--accent-color);
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
`;

export const Switcher = styled.span`
  a {
    color: var(--accent-color);
    font-weight: 700;
  }
  margin-bottom: 20px;
  margin-top: 10px;
`;
