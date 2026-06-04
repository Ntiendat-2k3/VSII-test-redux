import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import VerifiedIcon from '@mui/icons-material/Verified';
import AppChip from '../../components/ui/AppChip';
import AppHeading from '../../components/ui/AppHeading';

const cardContentSx = {
  p: 3,
  '&:last-child': { pb: 3 },
};

const accentBarSx = {
  height: 3,
  borderRadius: '3px 3px 0 0',
  background: 'linear-gradient(90deg, #00BFA6, #5DF2D6, #FFB74D)',
};

const statBoxSx = {
  flex: 1,
  textAlign: 'center',
  py: 1.5,
  px: 1,
  borderRadius: 2,
  backgroundColor: (theme) => alpha(theme.palette.background.default, 0.5),
};

const statLabelSx = {
  fontSize: '0.65rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'text.secondary',
  fontWeight: 600,
};

const statValueSx = {
  fontWeight: 700,
  fontSize: '0.85rem',
  color: 'text.primary',
};

const descriptionSx = {
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: 62,
};

function BreedCard({ breed }) {
  const { attributes } = breed;
  const { name, description, life, male_weight, female_weight, hypoallergenic } = attributes;

  const animationStyle = useMemo(
    () => ({
      animationDelay: `${Math.random() * 0.3}s`,
    }),
    []
  );

  return (
    <Card className="slide-up" style={animationStyle}>
      <Box sx={accentBarSx} />
      <CardContent sx={cardContentSx}>
        <Stack spacing={2}>
          {/* Header */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <AppHeading variant="h6" sx={{ flex: 1, mr: 1 }}>
              {name}
            </AppHeading>
            {hypoallergenic && (
              <AppChip
                icon={<VerifiedIcon sx={{ fontSize: 14 }} />}
                label="Hypoallergenic"
                size="small"
                color="success"
                variant="outlined"
              />
            )}
          </Stack>

          {/* Description */}
          <Typography variant="body2" sx={descriptionSx}>
            {description}
          </Typography>

          <Divider sx={{ opacity: 0.1 }} />

          {/* Stats */}
          <Stack direction="row" spacing={1}>
            <Box sx={statBoxSx}>
              <Typography sx={statLabelSx}>
                <FavoriteIcon sx={{ fontSize: 11, mr: 0.5, verticalAlign: 'middle' }} />
                Tuổi thọ
              </Typography>
              <Typography sx={statValueSx}>
                {life.min}–{life.max} năm
              </Typography>
            </Box>

            <Box sx={statBoxSx}>
              <Typography sx={statLabelSx}>
                <MaleIcon sx={{ fontSize: 13, mr: 0.3, verticalAlign: 'middle' }} />
                Đực
              </Typography>
              <Typography sx={statValueSx}>
                {male_weight.min}–{male_weight.max} kg
              </Typography>
            </Box>

            <Box sx={statBoxSx}>
              <Typography sx={statLabelSx}>
                <FemaleIcon sx={{ fontSize: 13, mr: 0.3, verticalAlign: 'middle' }} />
                Cái
              </Typography>
              <Typography sx={statValueSx}>
                {female_weight.min}–{female_weight.max} kg
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default BreedCard;
