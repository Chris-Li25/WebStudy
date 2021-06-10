import React, { Component } from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.less'

export default class App extends Component {
  render() {
    return (
      <div>
        APP...
        <button>按钮</button>
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
