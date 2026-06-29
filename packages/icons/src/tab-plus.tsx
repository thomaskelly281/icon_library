import { mdiTabPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabPlus(props: IconComponentProps) {
  return <Icon path={mdiTabPlus} {...props} />;
}

export { mdiTabPlus as path };
