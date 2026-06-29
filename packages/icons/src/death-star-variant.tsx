import { mdiDeathStarVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeathStarVariant(props: IconComponentProps) {
  return <Icon path={mdiDeathStarVariant} {...props} />;
}

export { mdiDeathStarVariant as path };
