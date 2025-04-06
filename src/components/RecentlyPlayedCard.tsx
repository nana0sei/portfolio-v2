import { Link } from "react-router-dom";
import useRecentlyPlayed from "../hooks/useRecentlyPlayed";

const RecentlyPlayedCard = () => {
  const { data: tracks, isLoading, error } = useRecentlyPlayed();

  if (isLoading) return <div className="skeleton w-[48px] h-[48px]"></div>;

  if (error) return null;

  const artists = tracks?.items[0].track.artists.map((a) => a.name).join(", ");

  return (
    <>
      <div className="dropdown dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="rounded-lg hover:scale-95 transition-transform overflow-clip cursor-pointer"
        >
          {/* image */}
          <img
            src={tracks?.items[0].track.album.images[0].url}
            alt="nana icon"
            width="48px"
          />{" "}
        </div>
        <div
          tabIndex={0}
          className="flex dropdown-content card bg-base-200 z-[1] min-w-64 p-2 shadow-md space-y-1"
        >
          <div className="flex gap-2 h-full items-center">
            {/* image */}
            <img
              src={tracks?.items[0].track.album.images[0].url}
              alt="nana icon"
              width="100px"
              className="rounded-lg  overflow-clip"
            />{" "}
            {/* details */}
            <div>
              <p className="text-sm font-semibold">recently played</p>

              <Link
                to={tracks?.items[0].track.external_urls.spotify!}
                target="_blank"
              >
                <p className="font-semibold text-blue-400 hover:underline">
                  {tracks && tracks?.items[0].track.name.length > 20
                    ? `${tracks?.items[0].track.name.slice(0, 15)}...`
                    : tracks?.items[0].track.name}
                </p>
              </Link>

              {/* artists */}
              {artists && artists.length > 20 ? (
                <div className="marquee-wrapper">
                  <p className="text-sm marquee">{artists}</p>
                </div>
              ) : (
                <p className="text-sm">{artists}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayedCard;
