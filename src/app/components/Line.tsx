const colorDispari = 'blue';
const colorPari = 'orange';
const xStartPos = 0.5;
const maxObjectNumber = 10;

export function Line() {
  return (
    <>
      {Array.from({ length: maxObjectNumber }, (_, i) => i + 1).map((numero) => {
        return (
          <mesh key={numero} position-x={1 * numero - xStartPos} position-y={0.5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={numero % 2 === 0 ? colorDispari : colorPari}></meshStandardMaterial>
          </mesh>
        );
      })}
      {Array.from({ length: maxObjectNumber }, (_, i) => i + 1).map((numero) => {
        return (
          <mesh key={numero} position-x={-1 * numero + xStartPos} position-y={0.5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={numero % 2 === 0 ? colorPari : colorDispari}></meshStandardMaterial>
          </mesh>
        );
      })}
    </>
  );
}
