import { mdiKeyChain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyChain(props: IconComponentProps) {
  return <Icon path={mdiKeyChain} {...props} />;
}

export { mdiKeyChain as path };
