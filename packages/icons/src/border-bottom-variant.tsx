import { mdiBorderBottomVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderBottomVariant(props: IconComponentProps) {
  return <Icon path={mdiBorderBottomVariant} {...props} />;
}

export { mdiBorderBottomVariant as path };
