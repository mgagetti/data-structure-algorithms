// Iteration Walthrough
// iteration 1
//      input [], [1,2,3], []
//      for index = 0
//      newNumber: 1
//      temp: [1]
//      nums: [2,3]

//      iteration 1.1
//          input: [1], [2,3], []
//          for index = 0
//          newNumber: 2
//          temp: [1,2]
//          nums: [3]

//          iteration 1.1.1
//              input [1,2], [3], []
//              for index = 0
//              newNumber: 3
//              temp: [1,2,3]
//              nums: []

//              iteration 1.1.1.1
//                  returns [[1,2,3]]

//      iteration 1.2
//          input: [1], [2,3], []
//          for index = 1
//          newNumber: 3
//          temp: [1,3]
//          nums: [2]

//          iteration 1.2.1
//              input: [1,3], [2], []
//              for index = 0
//              newNumber: 2
//              temp: [1,3,2]
//              nums: []

//              iteration 1.2.1.1
//                  returns [[1,2,3],[1,3,2]]

//      iteration 1.3
//          input: [1], [2,3], []
//          for index = 2
//          end

// iteration 2
//      input [], [1,2,3], []
//      for index = 1
//      newNumber: 2
//      temp: [2]
//      nums: [1,3]

//      iteration 2.1
//          input: [2], [1,3], []
//          for index = 0
//          newNumber: 1
//          temp: [2,1]
//          nums: [3]

//          iteration 2.1.1
//              input [2,1], [3], []
//              for index = 0
//              newNumber: 3
//              temp: [2,1,3]
//              nums: []

//              iteration 2.1.1.1
//                  returns [[1,2,3],[1,3,2], [2,1,3]]
// ...


const permute = (temp = [], nums = [], result = []) => {
    if (!nums.length) {
        result.push([...temp]);
        return;
    }

    for (let index = 0; index < nums.length; index++) {
        const newNumber = nums[index];
        temp.push(newNumber);
        nums.splice(index, 1);

        permute(temp, nums, result);

        temp.pop();
        nums.splice(index, 0, newNumber);
    }
}

const result = [];
permute([], [1,2,3], result);
console.log(result);
