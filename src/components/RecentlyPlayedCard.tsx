import square from "../assets/square.jpg";

const RecentlyPlayedCard = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
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
          className="dropdown-content card card-compact bg-white z-[1] w-fit h-fit p-2 shadow-md"
        >
          <div className="card-body">
            <div className="flex gap-2 h-full justify-center items-center">
              {/* image */}
              <img
                src={square}
                alt="nana icon"
                width="100px"
                className="rounded-lg  overflow-clip cursor-pointer w-[100px]"
              />{" "}
              {/* details */}
              <div>
                <p className="font-semibold">Song Title</p>
                <p>Artist Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayedCard;
