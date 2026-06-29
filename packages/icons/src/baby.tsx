import { mdiBaby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Baby(props: IconComponentProps) {
  return <Icon path={mdiBaby} {...props} />;
}

export { mdiBaby as path };
