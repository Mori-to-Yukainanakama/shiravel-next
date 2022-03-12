export function TextArea(props) {
  // カスタムスタイル
  const width = props.width || "100%";
  // const height = props.height || 'min-h-[40px]';
  const border = props.border || "border-main2 border-solid border-2";
  const focusBgColor = props.focusBgColor || "focus:bg-sub2";

  // 文字数分の幅
  const cols = props.cols || "1000";
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
          border: 0.1rem solid;
        }
      `}</style>
    </>
  );
}
