import { mdiVacuum } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vacuum(props: IconComponentProps) {
  return <Icon path={mdiVacuum} {...props} />;
}

export { mdiVacuum as path };
