import { mdiDeathlyHallows } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeathlyHallows(props: IconComponentProps) {
  return <Icon path={mdiDeathlyHallows} {...props} />;
}

export { mdiDeathlyHallows as path };
