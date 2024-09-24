type Props = {
  xDirection: number;
  xPosistion: number;
};

export function Box({ xDirection, xPosistion }: Props) {
  const calcXPos = (xInt: number) => {
    return xInt * xDirection;
  };
  //   const calcXPos = (xInt: number) => {
  //     return xInt * xDirection + xStartPos;
  //   };

  console.log('calcXPos(xPosistion)', calcXPos(xPosistion));
  return (
    <group position={[calcXPos(xPosistion), 0, 0]}>
      <mesh position-x={0} position-y={2}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'yellow'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={1} position-y={1}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'white'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={2} position-y={1}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'white'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={0} position-y={3}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'yellow'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={0} position-y={4}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'yellow'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={3} position-y={3}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'blue'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={3} position-y={4}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'blue'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={3} position-y={5}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'blue'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={2} position-y={6}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'red'}></meshStandardMaterial>
      </mesh>
      <mesh position-x={1} position-y={6}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={'red'}></meshStandardMaterial>
      </mesh>
    </group>
  );
}
