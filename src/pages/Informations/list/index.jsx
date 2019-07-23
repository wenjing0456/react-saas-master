import React from 'react';
import '../list/style.scss'
class Lists extends React.Component {
  /*
    遗留问题：
    删除时找不到delTask方法
    动态加样式
   */
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        { id: 0, text: '昨天大暴雨!!!', complete: false },
        { id: 1, text: '天气不错哦!!!', complete: false },
        { id: 2, text: '我是任务三!!!', complete: true },
      ]
    }
  }
  addTask =(event) => {
    event.preventDefault()
    console.log('add')
    let text = this.refs.text.value
    let newItem = { id: 1, text, complete: false }
    let newData = this.state.dataList.concat(newItem);
    this.setState({
      dataList: newData
    })
    console.log(newData)
  }
  delTask(event) {
    event.preventDefault()
    console.log(event)
  }
  complateTask(e){
    console.log(e)
  }
  status_format = (val) => {
    // const self = this;
    if (val) {
      return '已完成'
    } else {
      return '未完成'
    }
  }
  render() {

    
    const lineText = (e) => {
      // console.log(e)
    }
    return (
      <div className="homeWrap">
        <p>Demo：todo list</p>
        <div className="todoWrap">
          <input className="addTask" ref='text' type="text" /><button onClick={this.addTask}>Add</button>
          <span className="subTitle">任务清单：</span>
          <ul className="taskList">
            {
              this.state.dataList.map( (val, idx)=> {
                return <li key={idx}>
                  <input onClick={this.complateTask} className="checkBox" type="checkbox" name="" id=""/>
                  <span onClick={lineText}>{val.text}</span>
                  <span className="itemStatus">{this.status_format(val.complete)}</span>
                  <button className="del" onClick={this.delTask.bind(this)}>删除</button>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Lists;