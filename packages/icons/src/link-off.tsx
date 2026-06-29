import { mdiLinkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkOff(props: IconComponentProps) {
  return <Icon path={mdiLinkOff} {...props} />;
}

export { mdiLinkOff as path };
