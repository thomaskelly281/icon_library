import { mdiBroom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Broom(props: IconComponentProps) {
  return <Icon path={mdiBroom} {...props} />;
}

export { mdiBroom as path };
