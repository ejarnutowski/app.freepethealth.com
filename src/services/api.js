import axios from 'axios';
import config from 'src/config';
import { getUserId } from 'src/utils/user';

async function request(method, endpoint, params, data, headers = {}) {
  try {

    const apiBaseUrl = config.app.isProduction
      ? config.api.baseUrl.production
      : config.api.baseUrl.development;

    const options = {
      method: method,
      url: apiBaseUrl + endpoint,
      headers: { ...headers, 'X-User-Id': getUserId() },
      validateStatus: false,
    };

    if (params) options.params = params;
    if (data) options.data = data;

    const response = await axios(options);

    return response.data;

  } catch (error) {
    console.error(error);
    return { error: 'API request error' };
  }
}

export default {
  pets: {
    get() {
      return request('GET', '/pets');
    },
    getOne(id) {
      return request('GET', `/pets/${id}`);
    },
    create(data) {
      return request('POST', '/pets', null, data);
    },
    getRecords(id) {
      return request('GET', `/pets/${id}/records`);
    },
    createRecord({ id, data }) {
      return request('POST', `/pets/${id}/records`, null, data);
    },
  },
  users: {
    create(data) {
      return request('POST', '/users', null, data);
    },
  },
  admin: {
    pets: {
      get() {
        return request('GET', '/admin/pets');
      },
      getOne(id) {
        return request('GET', `/admin/pets/${id}`);
      },
      getRecords(id) {
        return request('GET', `/admin/pets/${id}/records`);
      },
    },
    tools: {
      purge() {
        return request('POST', '/admin/tools/purge-data', null, { confirm: true });
      },
    },
  },
};
