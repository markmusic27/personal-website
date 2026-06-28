import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 pt-[25vh]">
      <div className="flex w-full max-w-xl flex-col gap-4">
        <Image
          src="/pfp.png"
          alt="Mark Music"
          width={240}
          height={240}
          quality={100}
          priority
          className="h-[60px] w-[60px] rounded-full object-cover"
        />
        <div>
          <h1 className="pt-[10px] text-[20px] font-medium text-black">Mark Music</h1>
          <p className="mt-1 font-crimson text-[18px] font-extralight text-[#404040]">
            I&apos;m a student at Stanford studying CS &amp; EE. I want to make robots smart and useful.
          </p>
        </div>
      </div>
    </main>
  );
}
