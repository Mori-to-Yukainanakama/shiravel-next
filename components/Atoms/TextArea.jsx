export function TextArea(props) {
  // カスタムスタイル
  const width = props.width || "100%";
  const height = props.height || "100%";
  const minHeight = props.minHeight || "400px";

  // 文字数分の幅
  const cols = props.cols || "100";
  // 行数
  const rows = props.rows || "20";

  return (
    <>
      <textarea
        className={"style"}
        placeholder={props.placeholder}
        defaultValue={props.value}
        name={props.name}
        id={props.id}
        cols={cols}
        rows={rows}
        onChange={(event) => {
          props.setAction(event.target.value);
        }}
      />

      <style jsx>{`
        .style {
          width: ${width};
          height: ${height};
          min-height: ${minHeight};
        }
      `}</style>
    </>
  );
}
