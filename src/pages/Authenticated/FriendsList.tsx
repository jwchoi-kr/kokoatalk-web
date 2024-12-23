import { signOut } from '../../apis/auth.ts';

const FriendsList = () => {
  return (
    <div>
      <button onClick={signOut}>sign out</button>
    </div>
  );
};

export default FriendsList;
