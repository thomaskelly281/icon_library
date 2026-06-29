import { mdiBabel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Babel(props: IconComponentProps) {
  return <Icon path={mdiBabel} {...props} />;
}

export { mdiBabel as path };
