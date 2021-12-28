import daoLogo from "../assets/images/nav-bars/dao-logo.png";
import banklessLogo from "../assets/images/nav-bars/banklesslogo.png";
import notionLogo from "../assets/images/nav-bars/notion-logo.png";
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
        <a
          href="https://www.bankless.community/"
          target="_blank"
          rel="noreferrer"
          className="flex w-24 h-auto justify-center md:h-24"
        >
          <img src={daoLogo} alt="" />

          <img src={banklessLogo} alt="" />
        </a>

        <div className="flex items-center gap-6 hidden lg:inline-flex">
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
            href="https://bankless.notion.site/bankless/Bankless-DAO-82ba81e7da1c42adb7c4ab67a4f22e8f"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={notionLogo}
              alt=""
              style={{ width: "1.8rem" }}
              className="object-cover"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
