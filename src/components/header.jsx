import daoLogo from "../assets/images/nav-bars/dao-logo.png";
import banklessLogo from "../assets/images/nav-bars/banklesslogo.png";
import notionLogo from "../assets/images/nav-bars/notion-logo.png";
import discordLogo from "../assets/images/nav-bars/discord-logo.png";
import twitterLogo from "../assets/images/nav-bars/twitter-logo.png";

export default function Header() {
  return (
    <div>
      <header className="p-6 pt-3 pb-0 lg:pt-0 flex xl:px-24 h-max lg:h-40 bg-black w-full flex items-center justify-between">
        <a
          href="https://www.bankless.community/"
          target="_blank"
          rel="noreferrer"
          className="w-24 h-auto flex gap-4"
        >
          <img src={daoLogo} alt="" />

          <img className="hidden md:block" src={banklessLogo} alt="" />
        </a>

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
          <a
            href="https://bankless.notion.site/Getting-Started-with-Bankless-814cdac321104ad9897cbbd246153a38"
            target="_blank"
          >
            <img
              src={notionLogo}
              alt=""
              style={{ width: "1.8rem" }}
              className="object-cover"
            />
          </a>
        </div>
      </header>
    </div>
  );
}
