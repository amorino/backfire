/**
 * Mocking client-server processing
 */
import catalog from './catalog.json';

const TIMEOUT = 100;

export const api = {
  getItems() {
    return new Promise(resolve => {
      setTimeout(() => resolve(catalog), TIMEOUT);
    });
  }
};
