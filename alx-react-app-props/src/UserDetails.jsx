import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
