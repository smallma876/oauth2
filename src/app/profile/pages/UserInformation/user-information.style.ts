import styled from 'styled-components';
import { getMediaQuery, MediaQuerys } from '../../../../shared/utils/media-querys';

const CardProfile = styled.div`
  ${getMediaQuery(MediaQuerys.largeTablet)} {
    padding: 10px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    max-width: 500px;
    min-width: 520px;
    min-height: 300px;
    background: #fff;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: -29%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = styled.img``;

export const UserInformationStyled = {
  CardProfile,
  ImageWrapper,
  Image,
};
