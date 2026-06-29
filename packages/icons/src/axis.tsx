import { mdiAxis } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Axis(props: IconComponentProps) {
  return <Icon path={mdiAxis} {...props} />;
}

export { mdiAxis as path };
