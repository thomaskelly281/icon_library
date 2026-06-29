import { mdiBorderTopVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderTopVariant(props: IconComponentProps) {
  return <Icon path={mdiBorderTopVariant} {...props} />;
}

export { mdiBorderTopVariant as path };
