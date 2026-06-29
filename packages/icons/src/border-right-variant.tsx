import { mdiBorderRightVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderRightVariant(props: IconComponentProps) {
  return <Icon path={mdiBorderRightVariant} {...props} />;
}

export { mdiBorderRightVariant as path };
