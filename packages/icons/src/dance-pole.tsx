import { mdiDancePole } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DancePole(props: IconComponentProps) {
  return <Icon path={mdiDancePole} {...props} />;
}

export { mdiDancePole as path };
