import { mdiBellRing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellRing(props: IconComponentProps) {
  return <Icon path={mdiBellRing} {...props} />;
}

export { mdiBellRing as path };
