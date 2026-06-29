import { mdiBolt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bolt(props: IconComponentProps) {
  return <Icon path={mdiBolt} {...props} />;
}

export { mdiBolt as path };
