
 let numbers = [
   { 
            id: 1,
         title: 'Learn python',
         description: 'lorem',
         nested: {
            "name": 'nested'
        }
        },
     {
         id: 452,
         title: 'Learn python',
         description: 'lorem',
         nested: {
             "name": 'nested'
         }
     },
     {
         id: 3,
         title: 'Learn python',
         description: 'lorem',
         nested: {
            "name": 'nested'
        }
        }
 ];

 const evenNumbers = numbers.map(item => item?.nested?.name)
  console.log(evenNumbers);

