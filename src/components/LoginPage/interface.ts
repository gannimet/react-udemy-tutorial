import { RouteComponentProps } from 'react-router-dom';

interface LoginPageOwnProps {}

export type LoginPageProps = LoginPageOwnProps & RouteComponentProps;

export interface LoginPageState {
  hasError: boolean;
  username: string;
  password: string;
}