import React from "react";

export default function CTAs() {
  const CTAs = [
    {
      title: "Contribute",
      description: " Contribute to the fast growing Defi community.",
      ctaLabel: "GET INVOLVED",
    },
    {
      title: "Make $Bank",
      description: "Get paid in crypto for contributing to DAO.",
      ctaLabel: "START EARNING",
    },
    {
      title: "Community",
      description:
        "Become part of the Bankless Community, everyone is welcome.",
      ctaLabel: "JOIN THE DAO",
    },
  ];

  return (
    <div
      style={{}}
      className="w-full flex items-center justify-center bg-black"
    >
      <div
        style={{ maxWidth: "73rem" }}
        className="w-72 lg:w-full md:px-5 flex flex-col items-center gap-5 py-10 md:flex-row justify-between lg:px-24 py-20 md:w-full"
      >
        {CTAs.map((cta, key) => (
          <div
            key={key}
            style={{ border: "1px solid #FFF", maxWidth: "18rem" }}
            className="w-full flex flex-col justify-between w-64 h-64 border-black bg-black text-white rounded-xl p-6"
          >
            <div className="flex justify-between clearsans-bold text-3xl">
              <h1> {cta.title} </h1>
            </div>
            <p className="text- mt-5 clearsans-thin">{cta.description}</p>
            <a href="https://discord.com/invite/bankless" target="_blank" rel="noreferrer">
              <button
                style={{ backgroundColor: "#ff3131" }}
                className="w-full h-10 text-black clearsans-regular text-lg rounded-lg mt-8"
              >
                {cta.ctaLabel}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
