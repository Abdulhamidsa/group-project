export default function Calculate(props) {
  console.log("props", props);

  return (
    <>
      {calc(props.data)}
      <p>hej</p>
    </>
  );
}
