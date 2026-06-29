import { mdiTownHall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TownHall(props: IconComponentProps) {
  return <Icon path={mdiTownHall} {...props} />;
}

export { mdiTownHall as path };
