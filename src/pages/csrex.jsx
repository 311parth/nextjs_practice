import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MyPage() {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Fetch data from an API endpoint
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => {console.log(data);setData(data);});

    // Set focus on the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>My Page</h1>
      <input type="text" ref={inputRef} />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Link href="/first" className={styles.description}>firstpage for {}</Link>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="">
              Docs <span>-&gt;</span>
            </h2>
            <p className="">
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="">
              Learn <span>-&gt;</span>
            </h2>
            <p className="">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="">
              Templates <span>-&gt;</span>
            </h2>
            <p className="">
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="">
              Deploy <span>-&gt;</span>
            </h2>
            <p className="">
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <div>
      <div>
    </div>
    </div>

    </div>
  );
}
