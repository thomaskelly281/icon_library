import { mdiPaperRoll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperRoll(props: IconComponentProps) {
  return <Icon path={mdiPaperRoll} {...props} />;
}

export { mdiPaperRoll as path };
