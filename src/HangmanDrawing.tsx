const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "7px solid black",
      position: "absolute",
      top: "40px",
      right: "-28px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "7px",
      height: "120px",
      background: "black",
      position: "absolute",
      top: "102px",
      right: "0px",
    }}
  ></div>
);
const LEFTHAND = (
  <div
    style={{
      width: "7px",
      height: "55px",
      background: "black",
      position: "absolute",
      top: "95px",
      right: "20px",
      transform: "rotate(45deg)",
    }}
  ></div>
);
const RIGHTHAND = (
  <div
    style={{
      width: "7px",
      height: "55px",
      background: "black",
      position: "absolute",
      top: "95px",
      right: "-20px",
      transform: "rotate(-45deg)",
    }}
  ></div>
);

const LEFTLEG = (
  <div
    style={{
      width: "7px",
      height: "55px",
      background: "black",
      position: "absolute",
      top: "208px",
      right: "17px",
      transform: "rotate(45deg)",
    }}
  ></div>
);
const RIGHTLEG = (
  <div
    style={{
      width: "7px",
      height: "55px",
      background: "black",
      position: "absolute",
      top: "208px",
      right: "-17px",
      transform: "rotate(-45deg)",
    }}
  ></div>
);
export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {LEFTHAND}
      {RIGHTHAND}
      {LEFTLEG}
      {RIGHTLEG}
      <div
        style={{
          height: "40px",
          width: "7px",
          background: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      ></div>
      <div
        style={{
          height: "7px",
          width: "120px",
          background: "black",
          marginLeft: "100px",
        }}
      ></div>
      <div
        style={{
          height: "280px",
          width: "7px",
          background: "black",
          marginLeft: "100px",
        }}
      ></div>
      <div
        style={{
          height: "7px",
          width: "200px",
          background: "black",
        }}
      ></div>
    </div>
  );
}
