import { mdiTrayMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayMinus(props: IconComponentProps) {
  return <Icon path={mdiTrayMinus} {...props} />;
}

export { mdiTrayMinus as path };
