import { mdiBorderAllVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderAllVariant(props: IconComponentProps) {
  return <Icon path={mdiBorderAllVariant} {...props} />;
}

export { mdiBorderAllVariant as path };
