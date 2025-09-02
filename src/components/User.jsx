import React from 'react'

const User = ({name, age, email}) => {
  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  )
}

export default User