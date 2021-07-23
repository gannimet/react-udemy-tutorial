import { withTrackClick } from '../../hoc/withTrackClick/index';
import { ProfileOwnProps, ProfileProps } from './interface';

const Profile: React.FC<ProfileProps> = ({ ownerName, clicks }) => {
  return (
    <>
      <h1>Profile Component for {ownerName}</h1>
      <h2>Clicks: {clicks}</h2>
    </>
  )
}

export default withTrackClick<ProfileOwnProps>(Profile);