// code your solution here
function saturdayFun(a='roller-skate')
{
    let sat=`This Saturday, I want to ${a}!`
    return sat;
}



function mondayWork(work='go to the office')
{
    let mon=`This Monday, I will ${work}.`;
    return mon;
}


function wrapAdjective( ast='*')
{

      return function one(job="hard worker") 
      {
          return `You are ${ast}${job}${ast}!`;
      } 

}

