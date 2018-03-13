function CreateComponentCircle(point, item){
  var shape = new Shape.Circle(point, point.);
  shape.strokeColor = 'black';
  shape.fillColor = 'white';
  console.log(shape);
  var text = new PointText(new Point(curWidth+itemWidth/2, textSize+midHeight+shape.size.height/2));
  text.fillColor = 'black';
  text.size = textSize;
  text.content = items[i].name
  text.justification = 'center'
  curWidth += itemWidth*2;
  return new Group([shape, text])
}
