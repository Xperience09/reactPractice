import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Novel", "Poem", "Journal", "Short Stories", "Essay"];

  // creating a function to assign to onSlectItem which takes string as param --> this is like method overriding (assigning function value to a fuction)
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Kenbi's List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
