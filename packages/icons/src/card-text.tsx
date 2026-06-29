import { mdiCardText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardText(props: IconComponentProps) {
  return <Icon path={mdiCardText} {...props} />;
}

export { mdiCardText as path };
