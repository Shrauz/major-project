import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[url('/bg.jpg')]
        bg-cover
        bg-center
      "
    >
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <SignIn />
      </div>
    </div>
  );
}
