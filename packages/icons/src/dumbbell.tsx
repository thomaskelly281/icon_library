import { mdiDumbbell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dumbbell(props: IconComponentProps) {
  return <Icon path={mdiDumbbell} {...props} />;
}

export { mdiDumbbell as path };
