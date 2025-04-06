import axios from "axios";
import { add } from "date-fns";

interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
const refreshToken = import.meta.env.VITE_REFRESH_TOKEN;
const clientID = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const token = btoa(`${clientID}:${clientSecret}`);

const refreshAccessToken = () => {
  const tokenURL = "https://accounts.spotify.com/api/token";

  return axios
    .post<Token>(
      tokenURL,
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem(
        "expiry_date",
        add(new Date(), { seconds: res.data.expires_in }).toDateString()
      );

      return {
        access_token: res.data.access_token,
        expiry_date: add(new Date(), {
          seconds: res.data.expires_in,
        }).toDateString(),
      };
    })
    .catch((error) => {
      console.error("Error getting access token:", error);
    });
};

//axios instance

const axiosInstance = axios.create({
  baseURL: " https://api.spotify.com/v1",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getRecentlyPlayed = async () => {
    let expiry_date = localStorage.getItem("expiry_date");
    let access_token = localStorage.getItem("access_token");

    if (
      !access_token ||
      !expiry_date ||
      new Date().getTime() >= new Date(expiry_date).getTime()
    ) {
      const refreshed = (await refreshAccessToken()) as {
        access_token: string;
      };
      access_token = refreshed.access_token;
    }

    return axiosInstance
      .get<T>("me/player/recently-played", {
        headers: {
          Authorization: "Bearer " + access_token,
        },
        params: {
          limit: 1,
          before: new Date().getTime(),
        },
      })
      .then((res) => res.data);
  };
}

export default APIClient;
