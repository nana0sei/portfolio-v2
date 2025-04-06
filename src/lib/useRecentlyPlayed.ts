import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Tracks from "./Tracks";

const apiClient = new APIClient<Tracks>("");

const useRecentlyPlayed = () =>
  useQuery({
    queryKey: ["recently-played"],
    queryFn: () => apiClient.getRecentlyPlayed(),
  });

export default useRecentlyPlayed;
