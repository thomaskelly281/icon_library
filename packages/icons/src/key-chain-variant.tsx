import { mdiKeyChainVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyChainVariant(props: IconComponentProps) {
  return <Icon path={mdiKeyChainVariant} {...props} />;
}

export { mdiKeyChainVariant as path };
