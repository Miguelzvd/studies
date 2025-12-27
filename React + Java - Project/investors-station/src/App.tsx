import { useState } from "react";
import "./App.css";
import type { User } from "./interfaces/user";
import { USERS } from "./constants/users";

function App() {
  const userInfoDefaultValue: User = {
    name: "",
    age: 0,
    email: "",
    investment: "",
  };

  const [userFormInfo, setUserFormInfo] = useState<User>(userInfoDefaultValue);

  const [users, setUsers] = useState<User[]>(USERS);

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginBottom: "4rem",
          marginTop: "4rem",
        }}
      >
        <form
          style={{ background: "gray", padding: "1rem" }}
          onSubmit={(e) => {
            e.preventDefault();
            setUsers((prev) => {
              if (prev.some((user) => user.email === userFormInfo.email)) {
                alert("O email precisa ser diferente dos que já existem");
                return [...prev];
              }

              return [...prev, userFormInfo];
            });
            setUserFormInfo(userInfoDefaultValue);
            console.log(`Usuário: ${JSON.stringify(userFormInfo)}`);
          }}
        >
          <p>
            <label htmlFor="name">Nome: </label>
            <input
              type="text"
              id="name"
              value={userFormInfo.name}
              onChange={(e) =>
                setUserFormInfo((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </p>
          <p>
            <label htmlFor="age">idade: </label>
            <input
              type="number"
              id="age"
              value={userFormInfo.age}
              onChange={(e) =>
                setUserFormInfo((prev) => ({
                  ...prev,
                  age: Number(e.target.value),
                }))
              }
            />
          </p>
          <p>
            <label htmlFor="email">email: </label>
            <input
              type="email"
              id="email"
              value={userFormInfo.email}
              onChange={(e) =>
                setUserFormInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </p>
          <p>
            <label htmlFor="investment">investimentos: </label>
            <input
              type="text"
              id="investment"
              value={userFormInfo.investment}
              onChange={(e) =>
                setUserFormInfo((prev) => ({
                  ...prev,
                  investment: e.target.value,
                }))
              }
            />
          </p>

          <input type="submit" value={"Adicionar"} />
        </form>

        {users?.map((user, index) => {
          return (
            <div
              style={{
                color: "black",
                background: "white",
                position: "relative",
              }}
              key={index}
            >
              <span
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "fit-content",
                }}
              >
                Usuário {index + 1}
              </span>

              <button
                onClick={() =>
                  setUsers((prev) => {
                    const newArr = prev.filter(
                      (arrUser) => arrUser.email != user.email
                    );
                    return newArr;
                  })
                }
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "0.2rem",
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                }}
              >
                X
              </button>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  listStyle: "none",
                }}
              >
                <li>
                  <b>Nome:</b> {user.name}
                </li>
                <li>
                  <b>Email:</b> {user.email}
                </li>
                <li>
                  <b>Idade:</b> {user.age}
                </li>
                <li>
                  <b>Investimentos:</b> {user.investment}
                </li>
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
