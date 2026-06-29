import { mdiCloseOctagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseOctagon(props: IconComponentProps) {
  return <Icon path={mdiCloseOctagon} {...props} />;
}

export { mdiCloseOctagon as path };
