import daoLogo from "../assets/images/nav-bars/dao-logo.png";
import banklessLogo from "../assets/images/nav-bars/banklesslogo.png";
import mediumLogo from "../assets/images/nav-bars/medium-logo.png";
import discordLogo from "../assets/images/nav-bars/discord-logo.png";
import twitterLogo from "../assets/images/nav-bars/twitter-logo.png";
import githubLogo from "../assets/images/nav-bars/github-logo.png";

export default function Header() {
  return (
    <div>
      <header className=" p-6 flex xl:px-24 h-40 bg-black w-full flex items-center justify-between">
        <div className=" h-24 flex gap-4">
          <img
            src={daoLogo}
            alt=""
          />

          <img
            className="hidden md:block"
            src={banklessLogo }
            alt=""
          />
        </div>

        <div className="lg:hidden">
          <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-full px-3 py-1 border-white bg-black "
          >
            Connect Wallet
          </button>
        </div>

        <div className="flex gap-6 hidden lg:inline-flex">
          <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-full px-3 py-1 border-white bg-black "
          >
            Connect Wallet
          </button>
          <a href="/" target="_blank">
            <img
              src={mediumLogo}
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              src={discordLogo}
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              src={twitterLogo}
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              src={githubLogo}
              alt=""
            />
          </a>
        </div>
      </header>
    </div>
  );
}
