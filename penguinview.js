var PenguinView = function PenguinView(element) {
    this.element = element;
  
    this.onClickGetPenguin = null;
  };

  PenguinView.prototype.render = function render(viewModel) {
    this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' +
      '<img class="penguin-image" src="' + viewModel.imageUrl +
        '" alt="' + viewModel.name + '" />' +
      '<p><b>Size:</b> ' + viewModel.size + '</p>' +
      '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' +
      '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' +
        ' data-penguin-index="' + viewModel.previousIndex + '">Previous</a> ' +
      '<a id="nextPenguin" class="next button" href="javascript:void(0);"' +
        ' data-penguin-index="' + viewModel.nextIndex + '">Next</a>';
  
    this.previousIndex = viewModel.previousIndex;
    this.nextIndex = viewModel.nextIndex;
  
    // Wire up click events, and let the controller handle events
    var previousPenguin = this.element.querySelector('#previousPenguin');
    previousPenguin.addEventListener('click', this.onClickGetPenguin);
  
    var nextPenguin = this.element.querySelector('#nextPenguin');
    nextPenguin.addEventListener('click', this.onClickGetPenguin);
    nextPenguin.focus();
  };

  var ElementMock = function ElementMock() {
    this.innerHTML = null;
  };
  
  // Stub functions, so we can pass the test
  ElementMock.prototype.querySelector = function querySelector() { };
  ElementMock.prototype.addEventListener = function addEventListener() { };
  ElementMock.prototype.focus = function focus() { };
  
  // Arrange
  var elementMock = new ElementMock();
  
  var view = new PenguinView(elementMock);
  
  var viewModel = {
    name: 'Chinstrap',
    imageUrl: 'http://chinstrap1.jpg',
    size: '5.0kg (m), 4.8kg (f)',
    favoriteFood: 'krill',
    previousIndex: 1,
    nextIndex: 2
  };
  
  // Act
  view.render(viewModel);
  
  // Assert
  assert(elementMock.innerHTML.indexOf(viewModel.name) > 0);
  assert(elementMock.innerHTML.indexOf(viewModel.imageUrl) > 0);
  assert(elementMock.innerHTML.indexOf(viewModel.size) > 0);
  assert(elementMock.innerHTML.indexOf(viewModel.favoriteFood) > 0);
  assert(elementMock.innerHTML.indexOf(viewModel.previousIndex) > 0);
  assert(elementMock.innerHTML.indexOf(viewModel.nextIndex) > 0);