export default function ExecuteButton(props) {
  return (
    <>
      <button className={"btn"} onClick={() => props.action}>
        {props.children}
      </button>

      <style jsx>
        {`
          .btn {
          }
        `}
      </style>
    </>
  );
}
