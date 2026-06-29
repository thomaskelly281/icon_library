import { mdiFlagVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariant(props: IconComponentProps) {
  return <Icon path={mdiFlagVariant} {...props} />;
}

export { mdiFlagVariant as path };
