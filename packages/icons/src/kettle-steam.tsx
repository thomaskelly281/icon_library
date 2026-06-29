import { mdiKettleSteam } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KettleSteam(props: IconComponentProps) {
  return <Icon path={mdiKettleSteam} {...props} />;
}

export { mdiKettleSteam as path };
