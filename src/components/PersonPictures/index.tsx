import React from 'react';
import { withPersons } from '../../hoc/withPersons';
import { PersonPicturesOwnProps, PersonPicturesProps } from './interface';

const PersonPictures: React.FC<PersonPicturesProps> = ({ persons }) => {
  return (
    <>
      <h1>Person pictures</h1>
      <ul>
        {persons.map((person) => <li><img src={person.avatar} alt="Avatar" /></li>)}
      </ul>
    </>
  )
}

export default withPersons<PersonPicturesOwnProps>(PersonPictures);