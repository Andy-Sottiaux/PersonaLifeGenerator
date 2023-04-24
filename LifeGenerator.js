function magicEightBall(num) {
    return Math.floor(Math.random() * num);
  }
  
  const whatYourLifeLooksLike = {
    car: ['Lamborghini', 'Pinto', 'Ferrari', 'Impala', 'Tesla', 'Range Rover', 'Bugatti'],
    city: ['Miami', 'Dallas', 'LA', 'Erie', 'Denver', 'Paris', 'London', 'Seville'],
    occupation: ['Doctor', 'Engineer', 'NFL Player', 'Fry Cook', 'Librarian', 'Teacher'],
  };
  
  const personalLife = [];
  
  for (let item in whatYourLifeLooksLike) {
    let idxloc = magicEightBall(whatYourLifeLooksLike[item].length);
    
    console.log(`Selected index for ${item}: ${idxloc}`);
    
    switch(item) {
      case 'car':
        personalLife.push(`Your car is a "${whatYourLifeLooksLike[item][idxloc]}".`);
        break;
      case 'city':
        personalLife.push(`You are living in: "${whatYourLifeLooksLike[item][idxloc]}".`);
        break;
      case 'occupation':
        personalLife.push(`Your occupation is: "${whatYourLifeLooksLike[item][idxloc]}".`);
        break;
      default:
        personalLife.push('There is not enough info.');
    }
    
    console.log(`Current personal life: ${personalLife}`);
  }
  
  function formatLife(life) {
    const formatted = personalLife.join('\n');
    console.log(`Formatted personal life:\n${formatted}`);
  }
  
  // this will utilize the formatLife function that was just created.
  formatLife(personalLife);
  