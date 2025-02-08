function skillsMembers() {
  var members = [];
  for (var i = 0; i < 10; i++) {
    members.push({
      name: 'Member ' + i,
      skills: ['Skill 1', 'Skill 2', 'Skill 3']
    });
  }
  return members;
}