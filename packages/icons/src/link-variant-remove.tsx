import { mdiLinkVariantRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkVariantRemove(props: IconComponentProps) {
  return <Icon path={mdiLinkVariantRemove} {...props} />;
}

export { mdiLinkVariantRemove as path };
