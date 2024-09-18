import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend){
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

//console.log(older(friends[0]))

function allOlder(f:Friend[]) {

    const newAges = [];

    for (let i = 0; i < friends.length; i++) {
        f[i].age += 1
        newAges.push(`${f[i].name} is now ${f[i].age}`);
    }

    return newAges
}

//console.log(allOlder(friends));
  
  function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  //console.log(highestExtension(colleagues.current));


  function addColleague(cs: Colleague[], p0: string, p1: string, p2: string){
  
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
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));



function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));



function findFriends(
    friends: Friend[],
    criterion: (friend: Friend) => boolean
  ):Friend[] {
    return friends.filter(criterion); // Uses the filter method with the callback criterion
  }


console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));