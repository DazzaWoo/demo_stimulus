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
  static targets = [ "field", "output" ]
  static values = { 
    number: Number 

  }

  connect() {
    // this.outputTarget.textContent = this.numberValue
    // this.numberVaueChanged()
    this.changed()
  }

  // clicked() {
  //   this.numberValue++
  // }

  // numberValueChanged() {
  //   this.outputTarget.textContent = this.numberValue
  // }

  changed() {
    let text = this.fieldTarget.value
    this.outputTarget.textContent = text
  }
}
