import { mdiPaperCutVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperCutVertical(props: IconComponentProps) {
  return <Icon path={mdiPaperCutVertical} {...props} />;
}

export { mdiPaperCutVertical as path };
