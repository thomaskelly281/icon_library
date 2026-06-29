import { mdiTextShort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextShort(props: IconComponentProps) {
  return <Icon path={mdiTextShort} {...props} />;
}

export { mdiTextShort as path };
