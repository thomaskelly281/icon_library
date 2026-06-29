import { mdiTextLong } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextLong(props: IconComponentProps) {
  return <Icon path={mdiTextLong} {...props} />;
}

export { mdiTextLong as path };
