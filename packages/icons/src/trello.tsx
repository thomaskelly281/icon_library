import { mdiTrello } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Trello(props: IconComponentProps) {
  return <Icon path={mdiTrello} {...props} />;
}

export { mdiTrello as path };
