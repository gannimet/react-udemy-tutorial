import { RouteComponentProps } from 'react-router-dom';

export interface AboutPageRouteParams {
  username: string;
}

export type AboutPageProps = RouteComponentProps<AboutPageRouteParams>;