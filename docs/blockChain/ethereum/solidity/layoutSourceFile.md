# Solidity 源文件布局

源文件可以包含任意数量的 `合约定义`,`导入指令`, `pragma 指令`和`struct`,`enum`,`function`,`error`和常量变量定义。

## SPDX 许可证标识

如果他们的源代码可用，则可以更好地建立对智能合约的信任。由于提供源代码总是会涉及版权方面的法律问题，因此 Solidity 编译器鼓励使用机器可读的 SPDX 许可证标识符。每个源文件都应以指示其许可证的注释开头：

```solc
// SPDX-License-Identifier: MIT
```

如果不想指定许可证或代码不是开源，请使用特殊值`UNLICENSED`。

## Pragmas

该 `pragma` 关键字用于启用某些编译器功能或检查。pragma 指令始终位于源文件的本地，因此如果要在整个项目中启用它，则必须将 pragma 添加到所有文件中。

## Version Pragma

文件可以（并且应该）使用版本编译指示进行注释，以拒绝使用可能引入不兼容更改的未来编译器版本进行编译。我们试图将这些保持在绝对最低限度，并以语义变化也需要语法变化的方式引入它们，但这并不总是可行的。因此，至少对于包含重大更改的版本，通读更改日志总是一个好主意。这些版本始终具有以下形式的版本 0.x.0 或 x.0.0. 使用语法跟 npm 语法一样。

## 导入其他源文件

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
import { symbol1 as alias, symbol2 } from "filename";
```
