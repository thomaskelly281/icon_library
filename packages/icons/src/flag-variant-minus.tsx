import { mdiFlagVariantMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantMinus(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantMinus} {...props} />;
}

export { mdiFlagVariantMinus as path };
