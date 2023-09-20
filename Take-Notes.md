# โครงสร้างของ  Component มีอยู่ด้วยกัน 2แบบ

## 1. Function Component

```javascript

import React from 'react'

function Content() {
  return (
    <div>
      Hello React
    </div>
  )
}

export default Content

```
---
## 1. Class Component
```javascript

import React, { Component } from 'react'

 class Content extends Component {

  render() {
    return (
      <div>
        Content Class Component
      </div>
    )
  }
}
export default Content

```