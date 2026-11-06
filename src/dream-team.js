/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;

  const dreamTeamName = members.reduce((acc,cur) => {
    if (typeof cur === 'string') {
      acc.push(cur.trim().charAt(0))
    }

    return acc
  },[])

  return dreamTeamName.length > 0
    ? dreamTeamName.sort((a,b)=> a.localeCompare(b)).join('').toUpperCase()
    : false
}

module.exports = {
  createDreamTeam
};
