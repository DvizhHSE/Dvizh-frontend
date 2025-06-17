import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import api from '../api/axios';

const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '40px 120px',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
  overflowX: 'hidden',
}));

const BackWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  cursor: 'pointer',
});

const OrangeBackIcon = styled(ArrowBackIcon)({
  color: '#F16645',
  fontSize: '28px',
});

const BackText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#2A303E',
});

const Layout = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '40px',
  marginTop: '40px',
});

const ContentBlock = styled(Box)({
  flex: 1,
});

const EventImage = styled('img')({
  width: '587px',
  height: '459px',
  objectFit: 'cover',
  borderRadius: '10px',
  display: 'block',
});

const Title = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 800,
  fontSize: '52px',
  lineHeight: '64px',
  letterSpacing: '0.2px',
  color: '#2A303E',
  marginTop: '16px',
});

const Category = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.2px',
  textTransform: 'uppercase',
  color: '#AAACB2',
  marginTop: '8px',
});

const InfoBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '40px',
});

const InfoRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const InfoLabel = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.2px',
  color: '#2A303E',
  marginRight: '16px',
});

const InfoValue = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.2px',
  color: '#7F838B',
});

const RegisterWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '24px',
  width: 'max-content',
  gap: '12px',
});

const RegisterButton = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '17px 152px',
  gap: '10px',
  width: '384px',
  height: '44px',
  backgroundColor: '#F16645',
  borderRadius: '10px',
  cursor: 'pointer',
});

const RegisterButtonText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#FFFFFF',
  whiteSpace: 'nowrap',
});

const HeartButton = styled(IconButton)({
  width: 'auto',
  height: 'auto',
  padding: 0,
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
});

const DescriptionBlock = styled(Box)({
  width: '1216px',
  backgroundColor: '#F4F7FC',
  padding: '20px',
  boxSizing: 'border-box',
  borderRadius: '10px',
  marginTop: '24px',
  overflow: 'visible',
});

const DescriptionTitle = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: '0.1px',
  color: '#2A303E',
  marginBottom: '16px',
});

const Description = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.2px',
  color: '#7F838B',
  whiteSpace: 'pre-line',
});

const EventDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventData = location.state?.eventData;
  const [liked, setLiked] = useState(false);
  const [eventDetails, setEventDetails] = useState<any>(null);

  useEffect(() => {
    if (!eventData) return;


    api
      .get(`/api/events/${eventData}`)
      .then((res) => {
        setEventDetails(res.data);
      })
      .catch((err) => console.error('Ошибка загрузки события:', err));
  }, [eventData]);

  if (!eventDetails) {
    return <div>Загрузка...</div>;
  }

  return (
    <Container>
      <BackWrapper onClick={() => navigate(-1)}>
        <OrangeBackIcon />
        <BackText>Мероприятия / {eventDetails.name}</BackText>
      </BackWrapper>

      <Layout>
        <ContentBlock>
          <Category>{eventDetails.category_id}</Category>
          <Title>{eventDetails.name}</Title>

          <InfoBlock>
            <InfoRow>
              <InfoLabel>Место:</InfoLabel>
              <InfoValue>{eventDetails.location}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Дата:</InfoLabel>
              <InfoValue>{new Date(eventDetails.date).toLocaleDateString()}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Время:</InfoLabel>
              <InfoValue>
                {new Date(eventDetails.date).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Возрастное ограничение:</InfoLabel>
              <InfoValue>{eventDetails.age_limit || 'Нет'}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Для кого:</InfoLabel>
              <InfoValue>{eventDetails.for_roles?.join(', ') || 'Все'}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Организаторы:</InfoLabel>
              <InfoValue>{eventDetails.organizers || ''}</InfoValue>
            </InfoRow>

            <RegisterWrapper>
              <RegisterButton>
                <RegisterButtonText>Записаться</RegisterButtonText>
              </RegisterButton>

              <HeartButton onClick={() => setLiked(!liked)} aria-label="like">
                {liked ? (
                  <FavoriteIcon style={{ color: '#F16645', fontSize: 48 }} />
                ) : (
                  <FavoriteBorderIcon style={{ color: '#F16645', fontSize: 48 }} />
                )}
              </HeartButton>
            </RegisterWrapper>
          </InfoBlock>
        </ContentBlock>

        <EventImage
          src={eventDetails.photos?.[0] || eventDetails.image || ''}
          alt={eventDetails.name}
        />
      </Layout>

      <DescriptionBlock>
        <DescriptionTitle>Описание</DescriptionTitle>
        <Description>{eventDetails.description || 'Описание отсутствует'}</Description>
      </DescriptionBlock>
    </Container>
  );
};

export default EventDetailsPage;
