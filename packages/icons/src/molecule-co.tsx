import { mdiMoleculeCo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoleculeCo(props: IconComponentProps) {
  return <Icon path={mdiMoleculeCo} {...props} />;
}

export { mdiMoleculeCo as path };
