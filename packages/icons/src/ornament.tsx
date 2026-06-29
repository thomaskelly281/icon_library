import { mdiOrnament } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ornament(props: IconComponentProps) {
  return <Icon path={mdiOrnament} {...props} />;
}

export { mdiOrnament as path };
