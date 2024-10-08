import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

// console.log(updateFriend(friends[0], {
//   phone: '08712345',
//   dob: new Date("1998-10-22")
// }))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  //console.log(result)



  function generateEventPass(colleague: Colleague){
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  //console.log(generateEventPass(colleagues.current[0]));





  type FriendColleagueIntersection = {
    name: string;
    age: number;
    contact: {
      email: string;
      extension: number;
    };
  };


  function intersection(
    friends: Friend[],
    colleagues: Colleague[]
  ): FriendColleagueIntersection[] {
    let result: FriendColleagueIntersection[] = [];
  
    friends.reduce((mergList, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // If the name matches, create a new object with properties from both Friend and Colleague
        mergList.push({
          name: friend.name,
          age: friend.age,
          contact: {
            email: colleague.contact.email,
            extension: colleague.contact.extension,
          },
        });
      }
      return mergList;
    }, result);
  
    return result;
  }
  
  // Test the function with sample data
  console.log(intersection(friends, colleagues.current));