import { mdiStarShooting } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarShooting(props: IconComponentProps) {
  return <Icon path={mdiStarShooting} {...props} />;
}

export { mdiStarShooting as path };
