import user from '../data/user.json';
import Profile from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />
    </div>
)};
