import { useContext } from "react";
// カスタムプロバイダー
import { StyleContext } from "../../providers/StyleProvider";

export default function ExecuteButton(props) {
  const { theme } = useContext(StyleContext);

  const btnText = props.children || "実行";
  // カスタムスタイル
  const color = props.color || theme.primary.dark;
  const bgColor = props.bgColor || theme.primary.light;
  const hoverBgColor = props.hoverBgColor || theme.secondary.main;

  return (
    <>
      <button className={"btn"} onClick={() => props.action}>
        {btnText}
      </button>

      <style jsx>{`
        .btn {
          font-family: "IBM Plex Sans", sans-serif;
          font-weight: bold;
          font-size: 0.875rem;
          background-color: ${bgColor};
          padding: 12px 24px;
          border-radius: 8px;
          color: ${color};
          transition: all 150ms ease;
          cursor: pointer;
          border: none;
        }
        .btn:hover {
          background-color: ${hoverBgColor};
        }
      `}</style>
    </>
  );
}
