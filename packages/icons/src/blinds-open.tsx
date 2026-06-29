import { mdiBlindsOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlindsOpen(props: IconComponentProps) {
  return <Icon path={mdiBlindsOpen} {...props} />;
}

export { mdiBlindsOpen as path };
