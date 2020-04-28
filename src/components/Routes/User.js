import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import { default as UserContainer } from '../User/User.js';
import SectionBanner from '../Banners/SectionBanner';
import DataManager from '../DataManager.js';

const User = () => {
  let { id } = useParams();
  id = parseInt(id);
  const users = useSelector((state) => state.town.users);
  const user = users.find((user) => user.id === id);
  const friends = users.filter(({ name } = u) => user.friends.includes(name));
  return (
    <div data-testid="UserSite">
      <SectionBanner />
      <DataManager>
        <UserContainer {...user} friends={friends} />
      </DataManager>
    </div>
  );
};

export default User;
