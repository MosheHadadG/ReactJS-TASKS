function Box1() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightGreen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box2 />
    </div>
  )
}

function Box2() {
  return (
    <div style={{
      height: "90vh",
      width: "95vw",
      backgroundColor: "skyblue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box3 />
    </div>
  )
}

function Box3() {
  return (
    <div style={{
      height: "80vh",
      width: "90vw",
      backgroundColor: "lightpink",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "column",
    }}
    >
      <Box4 />
      <Box4 />
    </div>
    
  )
}

function Box4() {
  return (
    <div style={{
      height: "32vh",
      width: "60vw",
      backgroundColor: "hotpink"
    }}>
    </div>
  )
}

export function Boxes() {
  return (
    <div>
      <Box1 />
    </div>
  )
}

export default Boxes;