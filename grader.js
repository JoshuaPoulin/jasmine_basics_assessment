module.exports = {
  letterGrader : function(grades){
    if(grades < 60){
      return "F";
    } else if(grades < 70){
      return "D";
    } else if(grades < 80){
      return "C";
    } else if(grades < 90){
      return "B";
    } else {
      return "A";
    }
  };
  averageScore: function(grades){
    var newAverage = 0;
    for( i=0; i< grades.length; i++){
      newAverage += grades[i];
    }
    return newAverage / grades.length; 
  };
  medianScore: function(grades){
    var newVariable = Math.floor(grades.length / 2);
    console.log(grades[newVariable]);
  };
  modeScore: function(grades){
    var modeMap = {};
    for(var i = 0; i < grades.length; i++){
        if(modeMap[grades[i]] === undefined){
            modeMap[grades[i]] = 0;
        }        
            modeMap[grades[i]] += 1;
    }
    var theMode = 0;
    var mode;
    for(var prop in modeMap){
        if(modeMap[prop] > theMode){
            theMode = modeMap[prop];
            mode = prop;
        }
    }
    return parseInt(mode);
  }
}