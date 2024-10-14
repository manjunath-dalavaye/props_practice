interface propy {
  name: string;
  age: number;
  onDataChange: (data: string) => void;
}

const Child: React.FC<propy> = ({ name, age, onDataChange }) => {
  const HandleProp = () => {
    onDataChange("I am from child");
  };

  

  return (
    <>
      <p>
        <div>
          name {name} age {age}
        </div>

        <button onClick={HandleProp}>Click</button>
      </p>
    </>
  );
};

export default Child;
