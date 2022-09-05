import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useGlobalAppState } from '../../../../store/app-context';
import { LoginToken } from '../../../login/domain/login-token';
import { profileProxy } from '../../proxy/profile-proxy';
import { UserInformationStyled } from './user-information.style';

const UserInformation: React.FC = () => {
  const { user, token } = useGlobalAppState();

  useEffect(() => {
    const getAlbums = async () => {
      await profileProxy.getAlbums(token);
    };

    getAlbums();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserInformationStyled.CardProfile>
      <UserInformationStyled.ImageWrapper>
        <UserInformationStyled.Image src={user!.picture} alt="profile" />
      </UserInformationStyled.ImageWrapper>
      <div>{user!.name}</div>
    </UserInformationStyled.CardProfile>
  );
};

export default UserInformation;
