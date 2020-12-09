import Card from "./Card";

export default function CardList({ cats }) {
  return (
    <div>
      {cats.map((cat) => {
        return (
          <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email} />
        );
      })}
    </div>
  );
}
