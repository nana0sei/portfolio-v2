import square from "../assets/square.jpg";
import useRecentlyPlayed from "../hooks/useRecentlyPlayed";

const RecentlyPlayedCard = () => {
  const { data } = useRecentlyPlayed();

  console.log("Recently Played", data);
  return (
    <>
      <div className="dropdown dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="rounded-lg hover:scale-95 transition-transform overflow-clip cursor-pointer"
        >
          {/* image */}
          <img src={square} alt="nana icon" width="48px" />{" "}
        </div>
        <div
          tabIndex={0}
          className="dropdown-content card bg-base-200 z-[1] min-w-64 p-2 shadow-md space-y-1"
        >
          <div className="flex gap-2 h-full items-center">
            {/* image */}
            <img
              src={square}
              alt="nana icon"
              width="100px"
              className="rounded-lg  overflow-clip"
            />{" "}
            {/* details */}
            <div>
              <p className="text-center text-sm font-semibold">
                recently played
              </p>

              <p className="font-semibold">Song Title</p>
              <p className="text-sm">Artist Name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayedCard;
