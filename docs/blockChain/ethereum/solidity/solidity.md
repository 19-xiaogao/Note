# 介绍

Solidity 是一种用于实现智能合约的面向对象的高级语言。智能合约是管理以太坊状态内账户行为的程序。

Solidity 是一种 花括号语言，它受 C++,Python 和 JavaScript 的影响，旨在针对以太坊虚拟机(EVM)。

Solidity 是静态型的，支持继承，库和复杂的用户定义类型等功能。

使用 Solidity,您可以创建用户投票，众筹，盲拍和多重签名钱包等用途的合约。

## 安装 Solidity 编译器

`macOS` 安装方式。

```sh
brew tap ethereum/ethereum
brew install solidity

// 查看安装是否成功
solc --version
```

[其他安装 Solidity 方式](https://docs.soliditylang.org/en/v0.8.10/installing-solidity.html)

## 代码示例

从一个简单的智能合约实例看看。

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

     function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
```

第一行告诉你源代码是根据 GPL 3.0 版许可的。在发布源代码是默认设置的情况下，机器可读的许可证说明符很重要。

下一行指定源代码是为 Solidity 0.4.16 版或更高版本的语言编写的，但不包括 0.9.0 版。这是为了确保合约无法使用新的（破坏性的）编译器版本进行编译，因为它的行为可能会有所不同。

Solidity 意义上的合约是驻留在以太坊区块链特定地址的代码（其功能）和数据（其状态）的集合。行声明了一个状态变量类型的（ü nsigned INT 的艾格尔 256 位）。您可以将其视为数据库中的单个插槽，你可以通过调用管理数据库的代码的函数来查询和更改它。

要访问当前合约的成员（如状态变量），您通常不添加 this.前缀，您只需直接通过其名称访问它。

除了(用户以太坊构建的基础设施)任何人都可以通过`get`访问它，通过`set`覆盖它。

