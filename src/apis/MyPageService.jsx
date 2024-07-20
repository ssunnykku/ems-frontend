import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL;

export const axiosLogin = async (hrdNetId, password) => {
  try {
    const response = axios.post(
      'http://127.0.0.1:8080/api/students/login',
      {
        hrdNetId: hrdNetId,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json', // 요청의 Content-Type 설정
        },
        credentials: 'include', // 쿠키를 포함하여 요청,
      }
    );

    return response;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const axiosGetStudent = async () => {
  const response = await axios.post(
    'http://localhost:8080/api/valid-id',
    {
      hrdNetId: 'solsol5390',
    },
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InNvbHNvbDUzOTAiLCJzdWIiOiJzb2xzb2w1MzkwIiwiaWF0IjoxNzIxNDYwMTUwLCJleHAiOjE3MjE0NjE5NTB9.Td8kyHnLOob3p0mOBVtxBnSqo6gxNu3zTJdqlyM0Dxo',
        'Content-Type': 'application/json',
      },
      credentials: 'include', // 쿠키를 포함하여 요청,
    }
  );
  return response;
};
