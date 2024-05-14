import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const Home: NextPage = () => {
  const [catImageUrl, setCatImageUrl] = useState("");

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
  };

  const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    // console.log(result[0]);
    return result[0];
  };

  return (
    <>
      <div className={styles.main}>
        <h1>猫画像アプリ</h1>
        <img className={styles.img} src={catImageUrl} alt="猫画像" />
        <button onClick={handleClick}>今日の猫さん</button>
      </div>
    </>
  );
};

export default Home;
