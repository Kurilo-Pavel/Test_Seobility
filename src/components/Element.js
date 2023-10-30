class Element {
  constructor(selector){
    this.selector = document.createElement(selector);
  }
  show(){
    this.selector.style.display = "inline-block";
  };
  hide(){
    this.selector.style.display = "none";
  };
}
export default Element;