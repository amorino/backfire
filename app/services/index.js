/**
 * Mocking client-server processing
 */
import _items from './items';

const TIMEOUT = 100;

export const api = {
  getItems() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_items), TIMEOUT);
    });
  }
};
