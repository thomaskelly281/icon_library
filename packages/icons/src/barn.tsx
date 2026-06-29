import { mdiBarn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Barn(props: IconComponentProps) {
  return <Icon path={mdiBarn} {...props} />;
}

export { mdiBarn as path };
