// Create a prison function, that has your name as a private fugutive variable
function prison(fugitive) {
  let fugitve = 'Áron';
  let isPrisoned = true;
  let visitedTimes = 0;
  let escaped = false;

  return {
    visit: () => {
      visitedTimes++;
      if (isPrisoned !== true) {
        console.log('Nobody is here anymore')
      } else {
        console.log(`${fugitive} is visited ${visitedTimes} time(s)`)
      }
    },
    escape: () => {
      console.log(`BREAKING NEWS, ${fugitive} escaped the prison`)
      fugitive = undefined;
      isPrisoned = false;
    }
  }
}

const alcatraz = prison('Sad Panda');

alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore