import { mdiChiliOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChiliOff(props: IconComponentProps) {
  return <Icon path={mdiChiliOff} {...props} />;
}

export { mdiChiliOff as path };
