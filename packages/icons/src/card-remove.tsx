import { mdiCardRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardRemove(props: IconComponentProps) {
  return <Icon path={mdiCardRemove} {...props} />;
}

export { mdiCardRemove as path };
