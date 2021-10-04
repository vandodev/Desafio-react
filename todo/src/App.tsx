import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Fazer compras", done: false },
    { id: 2, name: "Cortar o cabelo", done: true },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
        {list.map((item, index) => (
          <div>
            {item.id} - {item.name}
          </div>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
