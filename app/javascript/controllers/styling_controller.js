// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "button" ]
  static classes = [ "primary" ]

  connect() {
    // this.outputTarget.textContent = this.numberValue
    this.numberVaueChanged()
    this.buttonTarget.classList.add(this.primaryClass)
  }
  clicked() {
    this.buttonTarget.classList.toggle(this.primaryClass)
  }
}
