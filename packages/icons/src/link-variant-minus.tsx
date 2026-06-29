import { mdiLinkVariantMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkVariantMinus(props: IconComponentProps) {
  return <Icon path={mdiLinkVariantMinus} {...props} />;
}

export { mdiLinkVariantMinus as path };
