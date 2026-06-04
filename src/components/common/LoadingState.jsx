import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SKELETON_COUNT = 8;

const skeletonCardSx = {
  p: 1,
};

const skeletonStackSx = {
  mt: 1,
};

const skeletonRoundedSx = {
  borderRadius: 2,
};

function SkeletonCard() {
  return (
    <Card sx={skeletonCardSx}>
      <CardContent>
        <Stack spacing={2}>
          <Skeleton variant="text" width="70%" height={32} />
          <Skeleton variant="text" width="100%" height={18} />
          <Skeleton variant="text" width="90%" height={18} />
          <Skeleton variant="text" width="60%" height={18} />
          <Stack direction="row" spacing={1} sx={skeletonStackSx}>
            <Skeleton variant="rounded" width={80} height={28} sx={skeletonRoundedSx} />
            <Skeleton variant="rounded" width={100} height={28} sx={skeletonRoundedSx} />
            <Skeleton variant="rounded" width={90} height={28} sx={skeletonRoundedSx} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function LoadingState() {
  return (
    <Grid container spacing={3} className="fade-in">
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={`skeleton-${index}`}>
          <SkeletonCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default LoadingState;
