import { mdiAccountPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountPlus(props: IconComponentProps) {
  return <Icon path={mdiAccountPlus} {...props} />;
}

export { mdiAccountPlus as path };
