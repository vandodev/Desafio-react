import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  return (
    <C.Container done={item.done}>
      <label>{item.name}</label>
    </C.Container>
  );
};
