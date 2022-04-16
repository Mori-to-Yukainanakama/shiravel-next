export default function Title(props) {
  const title = "タイトル";
  return (
    <>
      <div className="title">{props.title}</div>;
      <style jsx>{`
        .title {
          margin: 1rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}
