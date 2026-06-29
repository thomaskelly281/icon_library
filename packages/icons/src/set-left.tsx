import { mdiSetLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetLeft(props: IconComponentProps) {
  return <Icon path={mdiSetLeft} {...props} />;
}

export { mdiSetLeft as path };
