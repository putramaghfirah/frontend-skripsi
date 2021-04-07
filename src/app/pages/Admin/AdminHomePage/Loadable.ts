/**
 *
 * Asynchronously loads the component for AdminHomePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AdminHomePage = lazyLoad(
  () => import('./index'),
  module => module.AdminHomePage,
);
