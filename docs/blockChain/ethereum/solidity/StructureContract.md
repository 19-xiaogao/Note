# contract 的结构

Solidity 中的契约类似于面向对象语言中的类。每个合约都可以包含状`态变量`、`函数`、 `函数修饰符`、`事件`、`错误`、`结构类型`和`枚举类型`的声明。此外，合约可以从其他合约继承。

## 状态变量

状态变量是其值永久存储在合约存储中的变量。

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract SimpleStorage {
    uint storedData; // 状态变量
    // ...
}
```

## Functions

函数是代码的可执行单元。函数通常在合约内定义，但也可以在合约外定义。

```sol

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.1 <0.9.0;

contract SimpleAuction {
function bid() public payable { // Function
// ...
}
}

function helper(uint x) pure returns (uint) {
    return x \* 2;
}

```

函数调用可以在内部或外部发生，并且 对其他合约具有不同级别的可见性。函数接受参数并返回变量以在它们之间传递参数和值。

## 函数的修饰符

