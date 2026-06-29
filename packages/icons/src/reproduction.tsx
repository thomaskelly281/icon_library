import { mdiReproduction } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Reproduction(props: IconComponentProps) {
  return <Icon path={mdiReproduction} {...props} />;
}

export { mdiReproduction as path };
