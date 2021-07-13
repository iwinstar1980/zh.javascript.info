function Calculator() {
    this.x = 0;
    this.y = 0;

    this.read = function () {
        this.x = Number(prompt("请输入数字X：", 0));
        this.y = Number(prompt("请输入数字Y：", 0));
    }

    this.sum = function () {
        return this.x + this.y;
    }

    this.mul = function () {
        return this.x * this.y;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());