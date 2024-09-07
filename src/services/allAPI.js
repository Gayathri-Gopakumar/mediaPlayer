import serverUrl from "./baseURL";
import commonAPI from "./commonAPI";

// upload video API must be called by add component
export const uploadVideoAPI=async (uploadVideo)=>{
  return  await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}

// get all videos api must be called by view component
export const getAllVideosAPI=async()=>{
  return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}

// store watch history details API to be called by videocard
export const storeHistoryAPI=async (videoDetails)=>{
  return  await commonAPI("POST",`${serverUrl}/history`,videoDetails)

}

// get history API to be called by history component
export const getHistoryAPI=async ()=>{
  return await commonAPI("GET",`${serverUrl}/history`,"")
}

// remove history API to be called by HIstory component to delete history
export const removeHistoryAPI=async(historyId)=>{
  return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})

}

// remove video API called by VideoCard component
export const removeVideoAPI=async(videoId)=>{
  return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})

}

// addCategory api
export const addCategoryAPI=async (categoryDetails)=>{
  return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}


// getallcategory api
export const getAllCategoriesAPI=async()=>{
  return await commonAPI("GET",`${serverUrl}/categories`,"")
}

// remove category api
export const removeCategoryAPI=async(categoryId)=>{
  return await commonAPI("DELETE",`${serverUrl}/categories/${categoryId}`,{})

}