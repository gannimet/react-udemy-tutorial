import { withTrackClick } from '../../hoc/withTrackClick/index';
import { NewsFeedProps } from './interface';

const NewsFeed: React.FC<NewsFeedProps> = ({ clicks }) => {
  return (
    <>
      <h1>NewsFeed Component</h1>
      <h2>Clicks: {clicks}</h2>
    </>
  )
}

export default withTrackClick(NewsFeed);