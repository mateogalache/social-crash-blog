import { listArticleTitles } from "../../configFireBase";

export async function get() {
  const titles = await listArticleTitles();
  return {
    body: JSON.stringify(titles),
  };
}
