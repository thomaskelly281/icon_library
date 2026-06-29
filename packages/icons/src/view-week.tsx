import { mdiViewWeek } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewWeek(props: IconComponentProps) {
  return <Icon path={mdiViewWeek} {...props} />;
}

export { mdiViewWeek as path };
