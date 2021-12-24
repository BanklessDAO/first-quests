import CTAs from "./ctas";
import Header from "../header";
import poap from "../../assets/images/hero/poap.png";
import daoIndex from "../../assets/images/hero/dao-index.png"
import banklessIndex from "../../assets/images/hero/bankless-index.png"

export default function Hero() {
  return (
    <div className="w-screen bg-black">
      <Header />

      <div className="w-full flex items-center justify-center bg-black">
        <div
          style={{ maxWidth: "62rem"}}
          className="w-full h-max flex flex-col items-center lg:mx-24 xl:mx-0 md:flex-row-reverse justify-between lg:gap-y-0 px-10 lg:px-0 pt-8 text-white"
        >
          <div className="h-auto">
            <img className="" src={poap} alt="" />
          </div>
          <div className="flex justify-center mt-10 lg:flex flex-col gap-2">
            <h1 className="text-2xl xl:text-3xl mb-2 clearsans-bold">
              First Steps into Web3 <br className="hidden md:block" /> and
              Financial Independence.
            </h1>
            <p className="text-xl md:text-xl clearsans-thin">
              First Quests sets you on your greater Web3,
              <br className="hidden lg:block" /> Defi, and crypto adventure and
              will onboard
              <br className="hidden md:block" /> you into the bankless Dao.
            </p>
          </div>
        </div>
      </div>

      <CTAs />

      <div className="w-full bg-black flex justify-center">
        <div
          style={{ maxWidth: "81rem" }}
          className="w-full h-max bg-black flex flex-col items-center justify-between gap-y-0 p-4 md:flex-row xl:p-32 xl:py-12 xl:pt-20 xl:mx-16 md:gap-x-3"
        >
          <div className="px-5 md:p-10 md:pr-0 text-white flex flex-col gap-4 md:gap-2">
            <h1 className="text-3xl clearsans-bold lg:text-3xl">
              Bankless DAO
            </h1>
            <p
              style={{ maxWidth: "25rem" }}
              className="text-lg lg:text-lg clearsans-regular"
            >
              is the premier educational leader for welcoming the uninitiated
              into the Defi fold.
            </p>
          </div>
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <img
              src={daoIndex}
              alt=""
            />
            <h1 className="text-white text-3xl clearsans-bold">by</h1>
            <img
              className="w-2/4"
              src={banklessIndex}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
