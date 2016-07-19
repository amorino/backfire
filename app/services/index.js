/**
 * Mocking client-server processing
 */
import catalog from 'services/catalog.json';

const TIMEOUT = 2000;

export const api = {
  getItems() {
    return new Promise(resolve => {
      setTimeout(() => resolve(catalog), TIMEOUT);
    });
  },
};
