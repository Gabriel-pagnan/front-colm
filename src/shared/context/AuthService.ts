import axios from "axios";

interface IAuth {
  accessToken: string;
}

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export let AccessToken = '';
const formatToken = (token: string | null) => {
  const newToken = token?.replace('{"accessToken":"', '');
  return newToken?.replace('"}', '');
};

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem('APP_ACCESS_TOKEN');

  if (token) {
    AccessToken = `Bearer ${formatToken(token)}`;

    config.headers.Authorization = `Bearer ${formatToken(token)}`;
  }
  return config;
});

const auth = async (email: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.get('/auth', { data: { email, password } });

    if (data) {
      return data;
    }

    return new Error('Erro no login.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro no login.');
  }
};

export const AuthService = {
  auth,
};