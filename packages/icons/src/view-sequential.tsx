import { mdiViewSequential } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewSequential(props: IconComponentProps) {
  return <Icon path={mdiViewSequential} {...props} />;
}

export { mdiViewSequential as path };
