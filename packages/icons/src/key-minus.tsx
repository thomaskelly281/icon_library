import { mdiKeyMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyMinus(props: IconComponentProps) {
  return <Icon path={mdiKeyMinus} {...props} />;
}

export { mdiKeyMinus as path };
