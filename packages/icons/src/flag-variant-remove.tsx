import { mdiFlagVariantRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantRemove(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantRemove} {...props} />;
}

export { mdiFlagVariantRemove as path };
