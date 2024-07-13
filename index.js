// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record) {
 
    const found = record.find(entry => entry.result === 'W' )
    console.log(found);

    if (found) {
        return found.year;
    } else {
        return undefined;
    }
  }
