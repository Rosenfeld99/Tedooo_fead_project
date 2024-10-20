import { PostDataResponse } from "../types/postTypes";

// Fetch pst list with skip
export const fetchPostList = async (
  skip: number = 0
): Promise<PostDataResponse> => {
  console.log(`skip : ${skip}`);

  const url = `${import.meta.env.VITE_API_URL}?skip=${skip}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = (await response.json()) as PostDataResponse;
    return responseData;
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}`);
  }
};

// send impression to server wehn user viewed post
export const sendImpression = async (id: string) => {
  try {
    const url = `${import.meta.env.VITE_API_URL_IMPRESSEION}?itemId=${id}`;
    await fetch(url, {
      method: "GET",
    });

    // only return console log of postID
    return console.log(`PostID viewed : ${id}`);
  } catch (error) {
    console.error("Error sending impression:", error);
  }
};
