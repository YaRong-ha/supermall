import { request } from "./request";

export function getCategory_js() {
  return request({
    url: "/category"
  });
}

export function getSubcategory_js(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  });
}

export function getCategoryDetail_js(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  });
}
