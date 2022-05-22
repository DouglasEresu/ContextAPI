import { useStateValue } from "../ContextAPI/StateProvider";

export default function Result() {
  const [{ data }, {email},{password}] = useStateValue();
  console.log(data, email, password);

  return (
    <div className="App">
      <h1>Result</h1>
      <h1>Name is : {data}</h1>
      <h1>Email is :{email} </h1>
      <h1>Password is :{password} </h1>
    </div>
  );
}
