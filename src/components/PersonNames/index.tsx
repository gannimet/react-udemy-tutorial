import React from 'react';
import { withPersons } from '../../hoc/withPersons';
import { PersonNamesOwnProps, PersonNamesProps } from './interface';

const PersonNames: React.FC<PersonNamesProps> = ({ persons }) => {
  return (
    <>
      <h1>Person names</h1>
      <ul>
        {persons.map((person) => <li>{person.first_name} {person.last_name}</li>)}
      </ul>
    </>
  )
}

export default withPersons<PersonNamesOwnProps>(PersonNames);