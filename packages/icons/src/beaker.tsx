import { mdiBeaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Beaker(props: IconComponentProps) {
  return <Icon path={mdiBeaker} {...props} />;
}

export { mdiBeaker as path };
