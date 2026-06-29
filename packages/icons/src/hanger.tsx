import { mdiHanger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hanger(props: IconComponentProps) {
  return <Icon path={mdiHanger} {...props} />;
}

export { mdiHanger as path };
