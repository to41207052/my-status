
import { NextPage } from "next"


const IndexPage:NextPage = () => {

  // 下で定義されたfetchImageを実行して、statusをブラウザに表示
  const status = fetchImage()
  return <div><pre>{status}</pre></div>;
}
export default IndexPage;


// https://gameinfo-sgp.albiononline.com/api/gameinfo/players/qJkHQXYsQI-_H71DF0Qw0Q		
const fetchImage = async():Promise<string> => {
  // urlから、オブジェクトとして情報（JSONデータ）を受け取る
  const res = await fetch("https://gameinfo-sgp.albiononline.com/api/gameinfo/players/qJkHQXYsQI-_H71DF0Qw0Q");
  console.log(`これを見てくれ${JSON.stringify(res)}`); //object
  
  // JSONデータを配列に変換[{ここに内容}]
  const data = await res.json();
  
  console.log(`res.jsonになった時${JSON.stringify(data)}`);
  console.log(`image[0]としたとき ${JSON.stringify(data[0])}`)
  // 配列から0番目のオブジェクトのみにする

  const status = `
  名前 : ${JSON.stringify(data.Name)}
  ID : ${JSON.stringify(data.Id)}
  所属ギルド : ${JSON.stringify(data.GuildName)}
  モブキル名声 : ${JSON.stringify(data.LifetimeStatistics.PvE.Total)}
  Royal : ${JSON.stringify(data.LifetimeStatistics.PvE.Royal)}
  採取名声 : ${JSON.stringify(data.LifetimeStatistics.PvE.Outlands)}
  アバロンでの名声 : ${JSON.stringify(data.LifetimeStatistics.PvE.Avalon)}
  ヘルゲートでの名声 : ${JSON.stringify(data.LifetimeStatistics.PvE.Hellgate)}
  CorruptedDungeon : ${JSON.stringify(data.LifetimeStatistics.PvE.CorruptedDungeon)}
  ミストでの名声 : ${JSON.stringify(data.LifetimeStatistics.PvE.Mists)}
  製造名声 : ${JSON.stringify(data.LifetimeStatistics.Crafting.Total)}
  このデータの更新日 : ${JSON.stringify(data.LifetimeStatistics.Timestamp)}
  `

  console.log(status)
  return status;
}