import { mdiDotsHexagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsHexagon(props: IconComponentProps) {
  return <Icon path={mdiDotsHexagon} {...props} />;
}

export { mdiDotsHexagon as path };
