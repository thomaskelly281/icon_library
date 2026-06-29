import { mdiIdeogramCjk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IdeogramCjk(props: IconComponentProps) {
  return <Icon path={mdiIdeogramCjk} {...props} />;
}

export { mdiIdeogramCjk as path };
