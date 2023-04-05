import React, { PureComponent } from 'react'
import withRouter from "../hoc/with_router"

export class ClassComponent extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router; // 上面router是传了一个对象，所以这里解构一下拿到navigate函数
    navigate(path);
  }
  
  render() {
    return (
    	<button onClick={e => this.navigateTo('/about')}>类组件中通过js转跳至about页面</button>
    )
  }
}

export default withRouter(ClassComponent);