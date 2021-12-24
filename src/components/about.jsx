import backgroundImage from "../assets/images/about/background.png";
import waves from "../assets/images/about/waves.png";
import poap from "../assets/images/about/poap.png";

export default function White() {
  return (
    <div>
      <div
        className="w-screen bg-cover"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      >
        <div className="w-full flex justify-center">
          <div
            style={{ maxWidth: "65rem" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-0 pt-40 px-5 sm:px-14 lg:px-10"
          >
            <div>
              <div className="flex flex-col gap-5 ">
                <h1 className="text-4xl clearsans-bold ">Why Go Bankless?</h1>
                <p className="text-lg clearsans-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  rem recusandae distinctio libero sint. Labore, neque? Quasi
                  pariatur laborum ut labore ipsum non unde illum eos quam
                  voluptates corporis doloribus accusantium, rerum obcaecati
                  harum quidem corrupti enim dolor aliquid saepe quis laudantium
                  eum. Qui perspiciatis enim illum provident quasi dolores.
                </p>
                <div className="flex justify-center mt-10">
                  <img
                    className="w-full"
                    src={poap}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-4xl clearsans-bold ">Decentralisation</h1>
                <p className="text-lg mt-5 clearsans-regular">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
              <div>
                <h1 className="text-4xl clearsans-bold ">Financial Freedom</h1>
                <p className="text-lg mt-5 clearsans-regular ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
              <div className="mb-52">
                <h1 className="text-4xl mt-5 clearsans-bold ">Collaborative</h1>
                <p className="text-lg mt-5 clearsans-regular ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:`url("${waves}")`
          }}
          className="w-full flex justify-center md:justify-center pt-72 sm:pt-60 2xl:pt-96 pb-20 bg-cover" // md:px-16 xl:px-36 2xl:px-72
        >
          <div
            style={{ maxWidth: "58rem" }}
            className="w-11/12 md:w-full flex sm:px-14 lg:px-0"
          >
            <div className="">
              <h1 className="text-4xl mt-5 clearsans-bold text-white ">
                START YOUR FIRST QUEST
              </h1>
              <p className="text-lg mt-2 clearsans-regular text-white">
                and begin your journey into Web3, Defi, <br /> and Financial
                independence with the <br /> Bankless Dao.
              </p>
              <a href="https://discord.com/invite/bankless" target="_blank" rel="noreferrer">
                <button className="w-max clearsans-bold text-black text-xl bg-white p-4 px-8 rounded-2xl mt-14">
                  BEGIN QUEST
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
