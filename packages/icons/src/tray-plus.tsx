import { mdiTrayPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayPlus(props: IconComponentProps) {
  return <Icon path={mdiTrayPlus} {...props} />;
}

export { mdiTrayPlus as path };
