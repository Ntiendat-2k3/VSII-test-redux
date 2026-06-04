import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import {
  fetchAllBreeds,
  selectBreeds,
  selectBreedsLoading,
  selectBreedsError,
} from '../store/slices/breedSlice';
import PageHeader from '../components/common/PageHeader';
import LoadingState from '../components/common/LoadingState';
import ErrorState from '../components/common/ErrorState';
import EmptyState from '../components/common/EmptyState';
import BreedList from '../features/Breed/BreedList';

const containerSx = {
  pb: 8,
};

function BreedsPage() {
  const dispatch = useDispatch();
  const breeds = useSelector(selectBreeds);
  const loading = useSelector(selectBreedsLoading);
  const error = useSelector(selectBreedsError);

  useEffect(() => {
    dispatch(fetchAllBreeds());
  }, [dispatch]);

  const handleRetry = useCallback(() => {
    dispatch(fetchAllBreeds());
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return <LoadingState />;
    }

    if (error) {
      return <ErrorState error={error} onRetry={handleRetry} />;
    }

    if (breeds.length === 0) {
      return <EmptyState />;
    }

    return <BreedList breeds={breeds} />;
  };

  return (
    <Container maxWidth="xl" sx={containerSx}>
      <PageHeader
        title="🐶 Dog Breeds"
        subtitle="Khám phá thế giới đa dạng của các giống chó trên toàn cầu — thông tin chi tiết về tuổi thọ, cân nặng và đặc tính giống."
        count={!loading && !error ? breeds.length : null}
      />
      {renderContent()}
    </Container>
  );
}

export default BreedsPage;
