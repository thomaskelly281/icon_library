import { mdiTea } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tea(props: IconComponentProps) {
  return <Icon path={mdiTea} {...props} />;
}

export { mdiTea as path };
