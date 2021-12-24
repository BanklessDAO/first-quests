import daoLogo from "../assets/images/nav-bars/dao-logo.png";
import banklessLogo from "../assets/images/nav-bars/banklesslogo.png";
import mediumLogo from "../assets/images/nav-bars/medium-logo.png";
import discordLogo from "../assets/images/nav-bars/discord-logo.png";
import twitterLogo from "../assets/images/nav-bars/twitter-logo.png";

export default function Header() {
  return (
    <div>
      <header className="p-6 pt-3 pb-0 lg:pt-0 flex xl:px-24 h-max lg:h-40 bg-black w-full flex items-center justify-between">
        <div className="w-24 h-auto flex gap-4">
          <img src={daoLogo} alt="" />

          <img className="hidden md:block" src={banklessLogo} alt="" />
        </div>

        {/* <div className="lg:hidden">
          <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-full px-3 py-1 border-white bg-black "
          >
            Connect Wallet
          </button>
        </div> */}

        <div className="hidden lg:flex gap-6 items-center">
          {/* <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-full px-3 py-1 border-white bg-black"
          >
            Connect Wallet
          </button> */}
          <a href="/" target="_blank">
            <img src={mediumLogo} alt="" className="w-8 h-8 object-cover" />
          </a>
          <a
            href="https://discord.com/invite/bankless"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discordLogo} alt="" className="w-8 h-8 object-cover" />
          </a>
          <a
            href="https://twitter.com/banklessDAO"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="" className="w-6 h-6 object-cover" />
          </a>
        </div>
      </header>
    </div>
  );
}
