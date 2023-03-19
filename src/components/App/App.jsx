import users from '../../bd/user.json';
import { UserCard } from '../UserCard/UserCard';

import { Box } from '../App/App.styled';

export const App = () => {
  return (
    <Box>
      {users.map((user) => (
        <UserCard 
        key={user.id}
        id={user.id}
        tweets={user.tweets}
        followers={user.followers}
        />
      ))}
    </Box>
  );
};
