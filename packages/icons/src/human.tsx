import { mdiHuman } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Human(props: IconComponentProps) {
  return <Icon path={mdiHuman} {...props} />;
}

export { mdiHuman as path };
