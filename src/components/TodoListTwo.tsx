import { useState } from "react";

const TodoListTwo: React.FC = () => {
  interface UserInt {
    name: string;
    age: string;
    job: string;
  }

  interface AllUsersInt {
    currentUser: UserInt;
    allUsers: Array<UserInt>;
  }
  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: "",
    },
    allUsers: [],
  });

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);

    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setUsersState({
      currentUser: {
        name: "",
        age: "",
        job: "",
      },
      allUsers: [...usersState.allUsers, usersState.currentUser],
    });
  };

  const allUsers = usersState.allUsers.map((user, i) => (
    <div key={i}>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.job}</h2>
    </div>
  ));

  console.log(usersState);
  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="userName">Name:</label>
        <input
          type="text"
          id="userName"
          name="name"
          value={usersState.currentUser.name}
          onChange={onchangeHandler}
        />
        <label htmlFor="userAge">Age:</label>
        <input
          type="number"
          id="userAge"
          name="age"
          value={usersState.currentUser.age}
          onChange={onchangeHandler}
        />
        <label htmlFor="userJob">Job:</label>
        <input
          type="text"
          id="userJob"
          name="job"
          value={usersState.currentUser.job}
          onChange={onchangeHandler}
        />
        <button type="submit" className="btn-add-user">
          Add user
        </button>
      </form>
      {allUsers}
    </div>
  );
};

export default TodoListTwo;
