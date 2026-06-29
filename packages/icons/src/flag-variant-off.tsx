import { mdiFlagVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantOff(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantOff} {...props} />;
}

export { mdiFlagVariantOff as path };
