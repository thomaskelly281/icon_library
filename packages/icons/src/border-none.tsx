import { mdiBorderNone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderNone(props: IconComponentProps) {
  return <Icon path={mdiBorderNone} {...props} />;
}

export { mdiBorderNone as path };
