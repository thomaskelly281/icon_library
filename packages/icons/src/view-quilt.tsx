import { mdiViewQuilt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewQuilt(props: IconComponentProps) {
  return <Icon path={mdiViewQuilt} {...props} />;
}

export { mdiViewQuilt as path };
