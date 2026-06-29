import { mdiBullhornVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BullhornVariant(props: IconComponentProps) {
  return <Icon path={mdiBullhornVariant} {...props} />;
}

export { mdiBullhornVariant as path };
