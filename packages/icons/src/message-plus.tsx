import { mdiMessagePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessagePlus(props: IconComponentProps) {
  return <Icon path={mdiMessagePlus} {...props} />;
}

export { mdiMessagePlus as path };
