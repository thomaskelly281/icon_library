import { mdiCardsDiamond } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsDiamond(props: IconComponentProps) {
  return <Icon path={mdiCardsDiamond} {...props} />;
}

export { mdiCardsDiamond as path };
