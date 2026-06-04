import Grid from '@mui/material/Grid';
import BreedCard from './BreedCard';

function BreedList({ breeds }) {
  return (
    <Grid container spacing={3}>
      {breeds.map((breed) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={breed.id}>
          <BreedCard breed={breed} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BreedList;
