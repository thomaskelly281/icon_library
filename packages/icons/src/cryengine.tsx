import { mdiCryengine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cryengine(props: IconComponentProps) {
  return <Icon path={mdiCryengine} {...props} />;
}

export { mdiCryengine as path };
