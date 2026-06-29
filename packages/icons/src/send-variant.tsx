import { mdiSendVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendVariant(props: IconComponentProps) {
  return <Icon path={mdiSendVariant} {...props} />;
}

export { mdiSendVariant as path };
