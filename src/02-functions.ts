import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

//console.log(older(friends[0]))

function allOlder(f:Friend[]) : string[] {

    const newAges = [];

    for (let i = 0; i < friends.length; i++) {
        f[i].age += 1
        newAges.push(`${f[i].name} is now ${f[i].age}`);
    }

    return newAges
}

//console.log(allOlder(friends));


function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));


  function addColleague(cs: Colleague[], p0: string, p1: string, p2: string): void {
  
  const highest = highestExtension(cs);

  
  const newColleague: Colleague = {
    name: p0,
    department: p1,
    contact: {
      email: p2,
      extension: highest.contact.extension + 1 
    }
  };

  
  cs.push(newColleague);

}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
