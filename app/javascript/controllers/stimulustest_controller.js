import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("stimulustest_controller connected");
  }
  static targets = ["name", "output"];

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
