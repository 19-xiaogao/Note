# Solidity

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

## Solidity 源文件布局

源文件可以包含任意数量的 `合约定义`,`导入指令`, `pragma 指令`和`struct`,`enum`,`function`,`error`和常量变量定义。

### SPDX 许可证标识

如果他们的源代码可用，则可以更好地建立对智能合约的信任。由于提供源代码总是会涉及版权方面的法律问题，因此 Solidity 编译器鼓励使用机器可读的 SPDX 许可证标识符。每个源文件都应以指示其许可证的注释开头：

```solc
// SPDX-License-Identifier: MIT
```

如果不想指定许可证或代码不是开源，请使用特殊值`UNLICENSED`。

### Pragmas

该 `pragma` 关键字用于启用某些编译器功能或检查。pragma 指令始终位于源文件的本地，因此如果要在整个项目中启用它，则必须将 pragma 添加到所有文件中。

### Version Pragma

文件可以（并且应该）使用版本编译指示进行注释，以拒绝使用可能引入不兼容更改的未来编译器版本进行编译。我们试图将这些保持在绝对最低限度，并以语义变化也需要语法变化的方式引入它们，但这并不总是可行的。因此，至少对于包含重大更改的版本，通读更改日志总是一个好主意。这些版本始终具有以下形式的版本 0.x.0 或 x.0.0. 使用语法跟 npm 语法一样。

### 导入其他源文件

Solidity 支持 import 语句来帮助模块化你的代码，这些代码类似于 JavaScript 中可用的代码（从 ES6 开始）。但是，Solidity 不支持默认导出的概念。

```js
import "filename";
```

该 filename 部分称为导入路径。该语句将所有全局符号从“文件名”（以及在那里导入的符号）导入到当前的全局作用域中（与 ES6 不同，但向后兼容 Solidity）。不推荐使用这种形式，因为它不可预测地污染了命名空间。如果您在“文件名”中添加新的顶级项目，它们会自动出现在所有像这样从“文件名”导入的文件中。最好明确导入特定符号。

下面的示例创建一个新的全局符号，symbolName 其成员是来自 的所有全局符号"filename"：

```js
import * as symbolName from "filename";

// or
import "filename" as symbolName;
```

如果存在命名冲突，您可以在导入时重命名符号。

```js

import {symbol1 as alias, symbol2} from "filename";

```
