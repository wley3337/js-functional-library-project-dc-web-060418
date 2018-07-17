fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {

        const keyArray = Object.keys(collection);

      for(let x = 0; x < keyArray.length; x++){
        // debugger;
          iteratee(collection[keyArray[x]], keyArray[x], collection)
      }
      return collection;
    },

    map: function(collection, iteratee) {
      const keyArray = Object.keys(collection);
      const newArray =[];
    for(let x = 0; x < keyArray.length; x++){
      // debugger;
      newArray.push(iteratee(collection[keyArray[x]], keyArray[x], collection));
    }
    return newArray;

    },

    reduce: function(collection, iteratee, acc) {
// Reduce boils down a collection of values into a single value.
// Acc (short for accumulator) is the initial state of the reduction,
      let setAcc = acc;
     // and each successive step of it should be returned by the iteratee. The iteratee is passed three arguments: the acc, the value of the iteration, and finally a reference to the entire collection.

     const keyArray = Object.keys(collection);
     const newArray =[];
    for(let x = 0; x < keyArray.length; x++){

     setAcc = iteratee(setAcc, collection[keyArray[x]], collection);
    }
    return setAcc;
    },

  find: function(collection, predicate){

    const keyArray = Object.keys(collection);
    let result;
   for(let x = 0; x < keyArray.length; x++){
     if (predicate(collection[keyArray[x]])){
       return result = collection[keyArray[x]];
     }
   }
   return result;
  },



  filter: function(collection, predicate) {
    const keyArray = Object.keys(collection);
    const result = [];
   for(let x = 0; x < keyArray.length; x++){
     if (predicate(collection[keyArray[x]])){
       result.push(collection[keyArray[x]]);
     }
   }
   return result;
  },

  size: function(collection) {
    const keyArray = Object.keys(collection);
    let result = 0;
   for(let x = 0; x < keyArray.length; x++){
     result++;
   }
   return result;
  },

  first: function(array, n){
    if(n){
      let newArr = array.slice(0,n);
      return newArr;

    }else{
      return array[0];
    }
  },

  last: function(array, n) {
    if(n){
      return array.slice(-n);

    }else{
      return array.slice(-1)[0];
    }

  },

  compact: function(array){
    const result =[];
    for(const el in array){

      if(Boolean(array[el])){

        result.push(array[el]);
      };
    }
    return result;
  },

  sortBy: function(array, iteratee) {
    const newArray = [...array];
    return newArray.sort(function(a,b){return (iteratee(a) - iteratee(b))})
  },

  flatten: function(array, shallow) {
    // solve using recursion
    const newArray = [];
    if (shallow === true){
      // if number than don't do anything,
      // else recurisve select each and push newArray
      for(const el in array){
        if(typeof array[el] === "object"){
          for(const el2 in array[el]){
            newArray.push(array[el][el2])
          }
        }else{
          newArray.push(array[el])
        }
      }
    }else{
      for(const el in array){

        if(typeof array[el] === "object"){

          function arrayFlatener(arrayTWL){

            for(const el2 in arrayTWL){

              if(typeof arrayTWL[el2] === "object"){

                arrayFlatener(arrayTWL[el2]);
              }else{
                newArray.push(arrayTWL[el2]);
              }
            }
          };
          arrayFlatener(array[el]);

        }else{

        newArray.push(array[el]);
        }
      }
    }
    return newArray;
  },

uniq: function(array, isSorted, iteratee){
  const newArray = [];
  if(!iteratee){
    for(let x = 0; x< array.length; x++){
      if (!newArray.includes(array[x])){
        newArray.push(array[x]);
      }
    }
  }else{
    const modArray =[];

    for(const el in array){
      const checkEl = iteratee(array[el])
      if(!modArray.includes(checkEl)){
        newArray.push(array[el]);
        modArray.push(checkEl);
      };
    }
  }
    return newArray;
},

keys: function(object){
  const keyArray = [];
  for(let key in object){
    keyArray.push(key);
  }
  return keyArray;

},

values: function(object){
  const valueArray = [];
  for(let key in object){
    valueArray.push(object[key]);
  }
  return valueArray;
},

functions: function(object){
  const keyArray = [];
  for(let key in object){
    if(typeof object[key] === "function"){
    keyArray.push(key);
    }
  }
  return keyArray;
},

  }
})()

fi.libraryMethod()
