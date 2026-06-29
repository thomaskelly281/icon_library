import { mdiFuseBlade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FuseBlade(props: IconComponentProps) {
  return <Icon path={mdiFuseBlade} {...props} />;
}

export { mdiFuseBlade as path };
