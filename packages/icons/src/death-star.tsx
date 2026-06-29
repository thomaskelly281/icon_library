import { mdiDeathStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeathStar(props: IconComponentProps) {
  return <Icon path={mdiDeathStar} {...props} />;
}

export { mdiDeathStar as path };
