import { mdiPentagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pentagon(props: IconComponentProps) {
  return <Icon path={mdiPentagon} {...props} />;
}

export { mdiPentagon as path };
