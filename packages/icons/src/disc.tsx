import { mdiDisc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Disc(props: IconComponentProps) {
  return <Icon path={mdiDisc} {...props} />;
}

export { mdiDisc as path };
