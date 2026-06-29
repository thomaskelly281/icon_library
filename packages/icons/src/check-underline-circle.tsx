import { mdiCheckUnderlineCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckUnderlineCircle(props: IconComponentProps) {
  return <Icon path={mdiCheckUnderlineCircle} {...props} />;
}

export { mdiCheckUnderlineCircle as path };
