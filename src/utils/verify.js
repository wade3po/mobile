const patterns = {
  username: "[0-9a-zA-Z_]{4,30}$",
  name: "^[a-zA-Z_][0-9a-zA-Z_]{0,}$",
  phone: "^1[3-9]\\d{9}$$",
  email: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
  pwd:
    "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\\(\\)])+$)([^(0-9a-zA-Z)]|[\\(\\)]|[a-z]|[A-Z]|[0-9]){6,16}$",
  IP:
    "^(?=(\\b|\\D))(((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))\\.){3}((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))(?=(\\b|\\D))$",
  IDCard: "(^\\d{15}$)|(^\\d{17}([0-9]|X)$)",
  cn_name: "^[\u4e00-\u9fa5]+$",
};

//对应正则表达式的提示信息
const patternMsg = {
  username: "支持字母、数字和下划线，请输入4-30字符",
  name: "请以字母、下划线开头并包括数字、字母、下划线组成",
  phone: "手机号码格式不正确！",
  email: "邮箱地址格式不正确",
  pwd: "密码至少由6-16位包含字母、数字、特殊字符两种组合",
  IP: "非正确IP地址",
  IDCard: "身份证号码格式不正确！",
  cn_name: "请输入中文",
};

const pattern = (name, para = "g") => {
  return {
    pattern: new RegExp(patterns[name], para),
    message: patternMsg[name],
  };
};

export default pattern;