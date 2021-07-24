import { WrappedComponentProps } from '../../hoc/withPersons/interface';

export interface PersonNamesOwnProps {}

export type PersonNamesProps = PersonNamesOwnProps & WrappedComponentProps;