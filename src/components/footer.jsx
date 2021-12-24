import daoLogo from "../assets/images/nav-bars/dao-logo.png";
import banklessLogo from "../assets/images/nav-bars/banklesslogo.png";
import mediumLogo from "../assets/images/nav-bars/medium-logo.png";
import discordLogo from "../assets/images/nav-bars/discord-logo.png";
import twitterLogo from "../assets/images/nav-bars/twitter-logo.png";

export default function Footer() {
  return (
    <div>
      <footer
        style={{ borderBottom: "5px solid rgb(220, 38, 38)" }}
        className="h-40 bg-black w-full flex justify-center lg:flex flex items-center justify-evenly border-solid color-red-600"
      >
        <div className="text-white flex items-center hidden lg:inline-flex">
          ©2021 Bankless Dao
        </div>
        <div className="flex w-24 h-auto justify-center md:h-24">
          <img src={daoLogo} alt="" />

          <img src={banklessLogo} alt="" />
        </div>

        <div className="flex items-center gap-6 hidden lg:inline-flex">
          <a href="/" target="_blank">
            <img src={mediumLogo} alt="" className="w-8 h-8 object-cover" />
          </a>
          <a href="/" target="_blank">
            <img src={discordLogo} alt="" className="w-8 h-8 object-cover" />
          </a>
          <a href="/" target="_blank">
            <img src={twitterLogo} alt="" className="w-6 h-6 object-cover" />
          </a>
        </div>
      </footer>
    </div>
  );
}
