import { mdiShoeFormal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoeFormal(props: IconComponentProps) {
  return <Icon path={mdiShoeFormal} {...props} />;
}

export { mdiShoeFormal as path };
