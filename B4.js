


//  Just stupidly implementing a type of by French cryptographer Étienne Bazeries  which i read from a book on crytography book by Frank Rubin

  document.addEventListener("DOMContentLoaded", ()=>{


  const CiphertextDisplayP =  document.getElementById("CiphertextDisplayP");

  const TheOriginalword = document.getElementById("TheOriginalword");

  


const inputbox = document.getElementById("inputbox");


// Now what happens when the encipher button is clicked for the  input box

const thebutton = document.getElementById("thebutton");




thebutton.addEventListener("click", ()=>{

// I don't know why this has to be up here, but i think this is how js works cos if put below would not work

// Seems like i know the reason but i want to know more about why as a js junkie

  TheOriginalword.textContent = inputbox.value;

  const ResultOfStupidCode = TheButtonaction();

CiphertextDisplayP.textContent = ResultOfStupidCode;









})


   function TheButtonaction() {


let WhenInputedValue = inputbox.value;

inputbox.value =" " ;

// Please help my stupid code, how can i make it case insensitive without duplicating for both upper and lower case


const TheReplacement  = WhenInputedValue.replace(new RegExp(/[a-z]/gi ) , (T)=>{

switch ( T ) {

  case   "a":
    case   "A":
  
    return "H"

  case   "b":
   case   "B":
    return "G"

    
  case   "c":
    case   "C":
    return "F"

       
  case   "d":
    case   "D":
    return "D"

       
  case   "e":
    case   "E":
    return "C"


       
  case   "f":
    case   "F":
    return "B"



       
  case   "g":
    case   "G":
    return "A"



       
  case   "h":
    case   "H":
    return "Z"


       
  case   "i":
    case   "I":
    return "E"



       
  case   "j":
    case   "J":
    return "R"


       
  case   "k":
    case   "K":
    return "I"



     case   "l":
      case   "L":
    return "Y"

     case   "m":
      case   "M":
    return "X"

     case   "n":
      case   "N":
    return "W"

     case   "o":
      case   "O":
    return ""

     case   "p":
      case   "P":
    return "V"

     case   "q":
      case   "Q":
    return "U"

     case   "r":
      case   "R":
    return "T"

     case   "s":
      case   "S":
    return "Q"

     case   "t":
      case   "T":
    return "P"

     case   "u":
      case   "U":
    return "O"

     case   "v":
      case   "V":
    return "N"

     case   "w":
      case   "W":
    return "M"

     case   "x":
      case   "X":
    return "L"

     case   "y":
      case   "Y":
    return "K"


     case   "z":
      case   "Z":
    return "J"
  
  default:

return T

    
}

})


const FromInputValue2 = TheReplacement
      
FromInputShow2 = FromInputValue2.replace( new RegExp(" ",    "gi" ), "");

const InputResult2 = [];

const Demacartions2 = [ 4,2,3];

let   InitialRecycledLength2 = 0;

    
      while( FromInputShow2.length > 0){

        const SlicingLengths2 = Demacartions2[ InitialRecycledLength2] ;
  
       TheSlicingSwording2 = FromInputShow2.slice(0, SlicingLengths2);  
  
  InputResult2.push(TheSlicingSwording2);

   CurentFromInputShow2 = FromInputShow2.slice( SlicingLengths2);

   FromInputShow2 = CurentFromInputShow2;    
    
    InitialRecycledLength2 =  ( SlicingLengths2 + 1 ) % Demacartions2.length;


  }


  // The code above have demarcated into 4,3,2 parts until the lengtho the word is zero

  // Now the code below is to demarcate the above results to five parts/ looks the same as adding one part to 

// the other from its predecessor


    // Now trying to implement the part that would make it demarcate to fives
        
    const DemarcateAgainIntoFive = InputResult2.join(" " );

      
    TogetherThemFive = DemarcateAgainIntoFive.replace(new RegExp(" " , "gi"),"");


  const HoldTheFives = [];

  let SliceFiveInitaial = 0;


  while(  TogetherThemFive.length > 0 ){


    Outedfive = TogetherThemFive.slice(SliceFiveInitaial , 5);

HoldTheFives.push( Outedfive);

TogetherThemFive = TogetherThemFive.slice( 5);

       }



 ThenDisplay = HoldTheFives.join ( " ");

const ShowTheDisplay = ThenDisplay;


return ShowTheDisplay;


      }

      




  })
    ;





// Please roast my stupid code



  







