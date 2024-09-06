import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(Boolean);
  let items = ["Novel", "Poem", "Journal", "Short Stories", "Essay"];

  // creating a function to assign to onSlectItem which takes string as param --> this is like method overriding (assigning function value to a fuction)
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = () => {
    console.log("Clicked!!");
    setAlertVisibility(true);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Kenbi's List"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Click hide to hide this alert
        </Alert>
      )}
      <Button onClick={handleOnClick} color="secondary">
        Show
      </Button>
      <Button onClick={() => setAlertVisibility(false)}>Hide</Button>
    </div>
  );
}

export default App;
