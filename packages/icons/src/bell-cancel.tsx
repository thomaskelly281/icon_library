import { mdiBellCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCancel(props: IconComponentProps) {
  return <Icon path={mdiBellCancel} {...props} />;
}

export { mdiBellCancel as path };
