const getAge = function(person) {
  const currentYear = new Date().getFullYear();
  return (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    const currentAge = getAge(current);
    const oldestAge = getAge(oldest);
    return currentAge > oldestAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
