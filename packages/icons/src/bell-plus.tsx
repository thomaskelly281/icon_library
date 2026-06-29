import { mdiBellPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellPlus(props: IconComponentProps) {
  return <Icon path={mdiBellPlus} {...props} />;
}

export { mdiBellPlus as path };
