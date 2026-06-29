import { mdiDeleteClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteClock(props: IconComponentProps) {
  return <Icon path={mdiDeleteClock} {...props} />;
}

export { mdiDeleteClock as path };
