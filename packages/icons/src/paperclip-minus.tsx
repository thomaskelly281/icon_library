import { mdiPaperclipMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperclipMinus(props: IconComponentProps) {
  return <Icon path={mdiPaperclipMinus} {...props} />;
}

export { mdiPaperclipMinus as path };
