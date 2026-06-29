import { mdiCarSports } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSports(props: IconComponentProps) {
  return <Icon path={mdiCarSports} {...props} />;
}

export { mdiCarSports as path };
