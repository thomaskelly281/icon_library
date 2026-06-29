import { mdiTempleHindu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TempleHindu(props: IconComponentProps) {
  return <Icon path={mdiTempleHindu} {...props} />;
}

export { mdiTempleHindu as path };
