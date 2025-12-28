import { Link } from "react-router-dom";
import useRecentlyPlayed from "../hooks/useRecentlyPlayed";

const RecentlyPlayedCard = () => {
  const { data: tracks, isLoading, error } = useRecentlyPlayed();

  if (isLoading) return <div className="skeleton w-[48px] h-[48px]"></div>;

  if (error) return null;

  const latest_song = tracks?.items[0]!;

  return (
    <>
      <div className="dropdown dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="rounded-lg hover:scale-95 transition-transform overflow-clip cursor-pointer border p-2 min-w-52"
        >
          <div className="flex gap-2 items-center">
            <img
              src={latest_song.track.album.images[0].url}
              alt="nana icon"
              width="52px"
              className="rounded-lg overflow-clip"
            />
            <div>
              <Link
                to={latest_song.track.external_urls.spotify!}
                target="_blank"
              >
                <p className="font-semibold text-blue-400 hover:underline">
                  {latest_song.track.name.length > 20
                    ? `${latest_song.track.name.slice(0, 15)}...`
                    : latest_song.track.name}
                </p>
              </Link>

              {latest_song.track.artists.map((a) => a.name).join(", ").length >
              20 ? (
                <div className="marquee-wrapper">
                  <p className="text-sm marquee">
                    {latest_song.track.artists.map((a) => a.name).join(", ")}
                  </p>
                </div>
              ) : (
                <p className="text-sm">
                  {latest_song.track.artists.map((a) => a.name).join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="flex dropdown-content card bg-base-100 z-[1] min-w-64 p-2 shadow-md space-y-2"
        >
          <p className="text-sm font-semibold">recently played</p>

          {tracks?.items.slice(1).map((item) => (
            <div className="flex gap-2 items-center" key={item.track.id}>
              <img
                src={item.track.album.images[0].url}
                alt="nana icon"
                width="48px"
                className="rounded-lg overflow-clip"
              />
              <div>
                <Link to={item.track.external_urls.spotify!} target="_blank">
                  <p className="font-semibold text-blue-400 hover:underline">
                    {item.track.name.length > 20
                      ? `${item.track.name.slice(0, 15)}...`
                      : item.track.name}
                  </p>
                </Link>

                {item.track.artists.map((a) => a.name).join(", ").length >
                20 ? (
                  <div className="marquee-wrapper">
                    <p className="text-sm marquee">
                      {item.track.artists.map((a) => a.name).join(", ")}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm">
                    {item.track.artists.map((a) => a.name).join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayedCard;
