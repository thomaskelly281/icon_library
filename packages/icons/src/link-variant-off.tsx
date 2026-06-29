import { mdiLinkVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkVariantOff(props: IconComponentProps) {
  return <Icon path={mdiLinkVariantOff} {...props} />;
}

export { mdiLinkVariantOff as path };
