import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => CAMPSITES;

export const selectRandomCampsite = () => CAMPSITES(Math.floor(CAMPSITES.length * Math.random()));



