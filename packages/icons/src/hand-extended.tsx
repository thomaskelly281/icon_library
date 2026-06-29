import { mdiHandExtended } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandExtended(props: IconComponentProps) {
  return <Icon path={mdiHandExtended} {...props} />;
}

export { mdiHandExtended as path };
