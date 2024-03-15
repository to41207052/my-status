"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q=${inputValue}`)
      const data = await res.json()
      setData(data);
      console.log(`取得成功◾️${data.players}◾️`);
    };
    if(inputValue !== ''){
      fetchData();
    }
  },[inputValue]);

  //テキストボックスに入れられた値をInputValueに格納
  const handleChange = (event:any) => {
    setInputValue(event.target.value);



  };

// https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q=man		

  return(
    <div>
    <input 
      type="text" 
      value={inputValue} 
      onChange={handleChange} 
      placeholder="検索する値を入力" 
    />
    <p>入力されました: {inputValue}</p>
    {/* リンク */}
    <Link href="/my-status">
      {/* ボタン */}

        <button>検索</button>

    </Link>

    <p>{data}</p>
  </div>
  );
};

export default HomePage;