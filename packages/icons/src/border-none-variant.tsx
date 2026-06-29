import { mdiBorderNoneVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderNoneVariant(props: IconComponentProps) {
  return <Icon path={mdiBorderNoneVariant} {...props} />;
}

export { mdiBorderNoneVariant as path };
