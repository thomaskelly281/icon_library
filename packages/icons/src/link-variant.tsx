import { mdiLinkVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkVariant(props: IconComponentProps) {
  return <Icon path={mdiLinkVariant} {...props} />;
}

export { mdiLinkVariant as path };
