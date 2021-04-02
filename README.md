# React Fiber Node Parser

> A react fiber node parser from DOM node to stateful component node

## Memo

React Fiber 為雙向 linkedlist，非 DOM 為 Tree 結構，從 rootContainer 開始，結構可以參考

https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactInternalTypes.js#L49

幾個重要的屬性

- child: 子節點
- sibling: 兄弟節點
- stateNode: 指向 real DOM node
- return: parent node
- tag: 包含不同種類 Component，可以參考 https://github.com/facebook/react/blob/9ea4bc6ed607b0bbd2cff7bbdd4608db99490a5f/packages/shared/ReactWorkTags.js

memoizedState & memoizedProps

memoizedProps 比較單純，它內容會有兩種物件

- 準備傳入的父層 props
- 已經傳入的子層 props
- List render，會用 Fragment 包住

memoizedState 為單向 linkedlist，延續接著每個 state，可以參考 https://github.com/7kms/react-illustration-series/blob/v17.0.1/docs/algorithm/linkedlist.md

- memoizedState: 當前的 state
- next: 接下來的 state
- baseState: 當前的 state
- queue: 包含準備要更新的所有 state

為何不能將條件式擺在 useState() 前面: 會造成 state 錯位

https://www.mdeditor.tw/pl/pAOm/zh-tw
https://overreacted.io/zh-hans/why-do-hooks-rely-on-call-order/

mountWorkInProgressHook => 負責連接所有 hook 包含 state

queue 內會包 update 的 linkedList 假如 update1(prev=>prev+1) update2(prev=>prev+1) update3(prev=>prev+1)
他會變成 => update1 -> update2 -> update3
https://www.mdeditor.tw/pl/pXRJ/zh-tw
