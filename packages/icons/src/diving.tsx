import { mdiDiving } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Diving(props: IconComponentProps) {
  return <Icon path={mdiDiving} {...props} />;
}

export { mdiDiving as path };
