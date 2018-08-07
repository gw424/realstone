var Body={
  setColor:function(color){
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    $('body').css('backgroundColor',color);
  }
}

var Links={
  setColor:function(color){
    $('grid').css('color',color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('blue');
    self.value='day';

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue');
    self.value='night';
  }
}
