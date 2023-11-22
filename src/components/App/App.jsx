import user from '../../data/user.json';
import data from '../../data/data.json'
import Profile from '../Profile/Profile';
import Statictics from 'components/Statistics/Statistics';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />
      <Statictics title="Upload Stats" stats={data} />
    </Container>
    
)};
