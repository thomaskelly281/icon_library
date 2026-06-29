import { mdiCardMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardMultiple(props: IconComponentProps) {
  return <Icon path={mdiCardMultiple} {...props} />;
}

export { mdiCardMultiple as path };
