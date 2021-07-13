function readNumber() {
    while (true) {
        let value = prompt("请输入一个数字：");
        console.log(value);
        // 访问者输入空行时 value= ""（空字符串）; 点击“取消”时value=null
        // isFinite()函数 判定空字符串和null时会返回true；
        if (isFinite(value)) {
            return +value;
            break;
        }
    }
}

readNumber();