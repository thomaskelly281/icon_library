import { mdiIron } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Iron(props: IconComponentProps) {
  return <Icon path={mdiIron} {...props} />;
}

export { mdiIron as path };
