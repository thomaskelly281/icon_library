import { mdiAccountBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiAccountBoxMultiple} {...props} />;
}

export { mdiAccountBoxMultiple as path };
