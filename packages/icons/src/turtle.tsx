import { mdiTurtle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Turtle(props: IconComponentProps) {
  return <Icon path={mdiTurtle} {...props} />;
}

export { mdiTurtle as path };
