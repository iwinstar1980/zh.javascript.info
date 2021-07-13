function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value = this.value + Number(prompt("请输入要累计的值：", 1));
    }
}

let accumulator = new Accumulator(1); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

alert(accumulator.value); // 显示这些值的总和