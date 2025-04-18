import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/spotify-client";
import Tracks from "../entities/Tracks";

const apiClient = new APIClient<Tracks>("");

const useRecentlyPlayed = () =>
  useQuery({
    queryKey: ["recently-played"],
    queryFn: () => apiClient.getRecentlyPlayed(),
  });

export default useRecentlyPlayed;
