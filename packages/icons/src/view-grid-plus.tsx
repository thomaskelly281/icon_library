import { mdiViewGridPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGridPlus(props: IconComponentProps) {
  return <Icon path={mdiViewGridPlus} {...props} />;
}

export { mdiViewGridPlus as path };
