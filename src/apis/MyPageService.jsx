import axios from 'axios';
import { getCookie } from '../utils/Cookie.js';

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
        withCredentials: true, // 쿠키를 포함하여 요청
      }
    );

    // 서버에서 받은 access token을 사용하여 다른 요청 수행
    // const accessToken = response.data.accessToken;
    // console.log('Access Token:', accessToken);
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const axiosGetStudent = async () => {
  try {
    const response = await axios.post(
      `http://localhost:8080/api/valid-id`,
      {
        hrdNetId: 'solsol5390',
      },
      {
        headers: {
          'Content-Type': 'application/json', // 요청의 Content-Type 설정
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InNvbHNvbDUzOTAiLCJzdWIiOiJzb2xzb2w1MzkwIiwiaWF0IjoxNzIxMjgyNTQ0LCJleHAiOjE3MjEyODQzNDR9.9W4anYzOqC0zohH9KPcpkaVLGL19kdy4kCVUM9VDmBg',
        },
        withCredentials: true, // 쿠키를 포함하여 요청
      }
      // {
      //   headers: {
      //     Authorization:
      //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InNvbHNvbDUzOTAiLCJzdWIiOiJzb2xzb2w1MzkwIiwiaWF0IjoxNzIxMjY1NjQ2LCJleHAiOjE3MjEyNjc0NDZ9.j0r4KGFPvKbgm1MohpKUcfRhaI6-fWV7EoIjdp1sELM',
      //     'Content-Type': 'application/json',
      //     Cookie: 'JSESSIONID=092C8823E226DFC5C742F33EBFC0AE47',
      //   },
      // }
    );
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    console.error('Error config:', error.config);
  }
};
