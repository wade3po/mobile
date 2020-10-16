import {get, post} from '../axios.js'

export function test() {
  return post("/adminapi/users");
}