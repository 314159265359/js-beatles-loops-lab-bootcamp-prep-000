function theBeatlesPlay(musicians,instruments) {
  var newArray = []
  for(var i=0; i<musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts){
  var i = 0
  while(i<facts.length){
    facts[i] = facts[i] + "!!!"
    i+=1
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
    n+=1
  }while(n<15)
  return array
}
