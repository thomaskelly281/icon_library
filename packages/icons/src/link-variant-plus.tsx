import { mdiLinkVariantPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkVariantPlus(props: IconComponentProps) {
  return <Icon path={mdiLinkVariantPlus} {...props} />;
}

export { mdiLinkVariantPlus as path };
