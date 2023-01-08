import { useEffect, useState } from "react";

const IndexPage = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () =>
      await fetch("/api/hello-world")
        .then((res) => res.text())
        .then((text) => setText(text)))();
  }, []);

  return <h1>{text}</h1>;
};

export default IndexPage;
