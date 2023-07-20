import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-mono m-8">
        sanchezyspace
      </h1>
      <Image
        src={"/home_ricks_garage.jpg"}
        alt="Top image showing the garage of Rick and Morty"
        width={300}
        height={200}
        className="m-8"
      ></Image>
      <div className="flex flex-col text-red-500 m-8 items-center">
        <a
          className="font-mono hover:text-red-300"
          href="https://lizard-button-6e1.notion.site/about-13df3add2b044572ad44e87342343399?pvs=4"
        >
          about
        </a>
        <a
          className="font-mono hover:text-red-300"
          href="https://discord.gg/kaQhDFwt37"
        >
          discord
        </a>
        <a
          className="font-mono hover:text-red-300"
          href="https://github.com/sanchezyspace"
        >
          github
        </a>
      </div>
    </main>
  );
}
