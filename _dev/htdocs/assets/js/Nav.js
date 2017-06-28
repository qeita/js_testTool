class Nav{
  /**
   * constructor
   * @param {element} o Javascript Element
   */
  constructor(o){
    this.o = o;
    this.clname = 'is-open';
  }
  init(){
    return 'initialize...';
  }
  openNav(){
    this.o.classList.add(this.clname);
  }
  closeNav(){
    this.o.classList.remove(this.clname);
  }
}

export default { Nav }