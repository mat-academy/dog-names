interface NameDataProps {
  id: number;
  name: string;
  sex: string;
}

function NameEntry(props: NameDataProps): JSX.Element {
  return (
    <main>
      <p>{props.name}</p>
    </main>
  );
}
export default NameEntry;
