    
    let citizens = [
        {
          id: 1,
          'name': 'anne marie',
          'category':'singer ',
          'active':'1935',
          'end':'1977',
          'age':'20'
            },
        {
          id: 2,
          'name': 'diane',
          'category':'singer ',
          'active':'1946',
          'end':'1991',
          'age':'17'
        },
        {
          id: 3,
          'name': 'tylor swift',
          'category':'dancer ',
          'active':'1957',
          'end':'2018',
          'age':'49'
        },
        {
          id: 4,
          'name': 'levis',
          'category':'sports',
          'active':'1976',
          'end':'2018',
          'age':'12'
        },
        {
          id: 5,
          'name': 'tiger ben',
          'category':'actor ',
          'active':'2000',
          'end':'2018',
          'age':'45'
        }  
      ];
      
      // const allowedToDrinkArray = Citizen.filter(function (Ctz) { return Ctz.age>=18 } );
      
      const newGreaterData = citizens.filter((citizen) => citizen.age >= 18);
      const newLessData = citizens.filter((citizen) => citizen.age < 18);
      
      // console.log(newArray);
      // app.get('/', function(req, res) {
      //   res.json({Message:'citizens who are allowed to Drink'});
      // });