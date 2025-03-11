// code your solution here
const record = [
     { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
   // { year: "2014", result: "N/A"},
   //{ year: "2013", result: "L"},

]
function superbowlWin( record){
   // console.log("Record:", record);
   const win = record.find(game => game.result.trim() === "W");

   // const win =record.find( game => game.result==="w");
   // console.log("Win Object:", win); // Debugging line to check what `find()` returns
    return win?win.year : undefined;
    
}
console.log(superbowlWin(record));