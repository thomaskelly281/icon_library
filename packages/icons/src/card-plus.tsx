import { mdiCardPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardPlus(props: IconComponentProps) {
  return <Icon path={mdiCardPlus} {...props} />;
}

export { mdiCardPlus as path };
