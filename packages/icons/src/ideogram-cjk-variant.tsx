import { mdiIdeogramCjkVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IdeogramCjkVariant(props: IconComponentProps) {
  return <Icon path={mdiIdeogramCjkVariant} {...props} />;
}

export { mdiIdeogramCjkVariant as path };
