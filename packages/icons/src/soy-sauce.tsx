import { mdiSoySauce } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SoySauce(props: IconComponentProps) {
  return <Icon path={mdiSoySauce} {...props} />;
}

export { mdiSoySauce as path };
