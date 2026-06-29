import { mdiFilterOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterOff(props: IconComponentProps) {
  return <Icon path={mdiFilterOff} {...props} />;
}

export { mdiFilterOff as path };
