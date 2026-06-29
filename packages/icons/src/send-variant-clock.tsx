import { mdiSendVariantClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendVariantClock(props: IconComponentProps) {
  return <Icon path={mdiSendVariantClock} {...props} />;
}

export { mdiSendVariantClock as path };
