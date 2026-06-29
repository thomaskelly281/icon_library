import { mdiFlagVariantPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantPlus(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantPlus} {...props} />;
}

export { mdiFlagVariantPlus as path };
