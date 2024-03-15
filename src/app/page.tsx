import { greeting as greetingAction } from "@/app/action";

export default async function Home() {
  const greeting = await greetingAction();

  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
}
