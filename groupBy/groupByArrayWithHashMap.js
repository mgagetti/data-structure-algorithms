const myList = [
   {
      "name": "A",
      "date": new Date("06/19/2019")
   },
   {
      "name": "B",
      "date": new Date("06/30/2019")
   },
   {
      "name": "C",
      "date": new Date("07/30/2019")
   }
]


const groupBy = (list, keyGetterFn) => {
    const map = new Map();

    list.forEach(item => {
         const key = keyGetterFn(item);
         const collection = map.get(key);

         if (!collection) {
            map.set(key, [item]);
         } else {
            collection.push(item);
         }
    });
    
    return [...map.values()];
}

const res = groupBy(myList, task => task.date.getMonth());

console.log(res);