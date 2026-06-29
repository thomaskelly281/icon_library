import { mdiBell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bell(props: IconComponentProps) {
  return <Icon path={mdiBell} {...props} />;
}

export { mdiBell as path };
