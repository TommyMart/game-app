import ListGroup from "./components/ListGroup";

function App() {
  const items = ["NY", "San Fran", "LA", "Paris", "Sydney"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
