import axiosInstance from './axiosInstance';

const breedService = {
  getAllBreeds: async () => {
    const response = await axiosInstance.get('/breeds');
    return response.data;
  },
};

export default breedService;
