import request from "../utils/request";
// 登录接口
export function login(data) {
  return request.post("/home/login", data);
}

export function getUser() {
  return request.get("/home/user");
}
export function register(data) {
  return request.post("/home/register", data);
}
export function getCategoryList() {
  return request.get("/home/category/list");
}
export function getGoodsList(params) {
  return request.get("/home/goods/list", { params });
} 
