import { mdiAlphaXCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaXCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaXCircle} {...props} />;
}

export { mdiAlphaXCircle as path };
