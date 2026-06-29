import { mdiBellRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellRemove(props: IconComponentProps) {
  return <Icon path={mdiBellRemove} {...props} />;
}

export { mdiBellRemove as path };
