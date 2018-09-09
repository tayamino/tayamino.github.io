var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;
function HeadImage(className) {
  this.className = className;
  this.imageLeft = $('.' + this.className + '>.head-image').offset().left;
  this.imageRight =
    this.imageLeft + $('.' + this.className + '>.head-image').width();
  this.imageTop = $('.' + this.className + '>.head-image').offset().top;
  this.imageBottom =
    this.imageTop + $('.' + this.className + '>.head-image').height();
  this.setImageDirection = function() {
    $('.' + this.className + '>.head-image').css('z-index', '0');
    if (
      App.objs.mouseX >= this.imageLeft &&
      App.objs.mouseX <= this.imageRight &&
      App.objs.mouseY <= this.imageTop
    ) {
      $('.' + this.className + '>.up').css('z-index', '1');
    } else if (App.objs.mouseX < this.imageLeft && App.objs.mouseY < this.imageTop) {
      $('.' + this.className + '>.up-left').css('z-index', '1');
    } else if (
      App.objs.mouseX <= this.imageLeft &&
      App.objs.mouseY >= this.imageTop &&
      App.objs.mouseY <= this.imageBottom
    ) {
      $('.' + this.className + '>.left').css('z-index', '1');
    } else if (App.objs.mouseX < this.imageLeft && App.objs.mouseY > this.imageBottom) {
      $('.' + this.className + '>.down-left').css('z-index', '1');
    } else if (
      App.objs.mouseX >= this.imageLeft &&
      App.objs.mouseX <= this.imageRight &&
      App.objs.mouseY >= this.imageBottom
    ) {
      $('.' + this.className + '>.down').css('z-index', '1');
    } else if (App.objs.mouseX > this.imageRight && App.objs.mouseY > this.imageBottom) {
      $('.' + this.className + '>.down-right').css('z-index', '1');
    } else if (
      App.objs.mouseX >= this.imageRight &&
      App.objs.mouseY >= this.imageTop &&
      App.objs.mouseY <= this.imageBottom
    ) {
      $('.' + this.className + '>.right').css('z-index', '1');
    } else if (App.objs.mouseX > this.imageRight && App.objs.mouseY < this.imageTop) {
      $('.' + this.className + '>.up-right').css('z-index', '1');
    } else {
      $('.' + this.className + '>.front').css('z-index', '1');
      $('.text-holder').css('display', 'none');
      $('.' + this.className + '.text-holder').css('display', 'block');
    }
  };
}
