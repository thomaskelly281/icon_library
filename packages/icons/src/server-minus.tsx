import { mdiServerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerMinus(props: IconComponentProps) {
  return <Icon path={mdiServerMinus} {...props} />;
}

export { mdiServerMinus as path };
