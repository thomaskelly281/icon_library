import { mdiPliers } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pliers(props: IconComponentProps) {
  return <Icon path={mdiPliers} {...props} />;
}

export { mdiPliers as path };
