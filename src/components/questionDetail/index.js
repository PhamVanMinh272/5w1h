import React from 'react'
import './index.css'

class QuestionDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          showInput: false,
          answers: ['cai ban', 'cai ghe']
        }
    }

    showInputAddInfo(state) {
      this.setState({
        showInput: !state
      })
    }

    addInfo(e) {
      if (e.key === 'Enter') {
        console.log(e.target.value)
        let answers = this.state.answers
        answers.push(e.target.value)
        this.setState({
          answers: answers
        })
      }
      console.log('aa', this.state.answers)
      
    }

    showInfo() {
      let info = []
      let count = 1
      console.log(typeof this.state.answers)
      console.log(this.state.answers)
      this.state.answers.forEach(item => {
        info.push(<p key={count}>{item}</p>)
        count += 1
      })
      return info
    }

    render() {
        return (
          <div>
            <div className="dropup">
              <button className="dropbtn">What</button>
              <div className="dropup-content">
                {this.showInfo()}
                <input onKeyPress={(e) => this.addInfo(e)}/>
              </div>
            </div>
            <div></div>
          </div> 
        )
    }
}

export default QuestionDetail;
