import { mdiSnake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snake(props: IconComponentProps) {
  return <Icon path={mdiSnake} {...props} />;
}

export { mdiSnake as path };
