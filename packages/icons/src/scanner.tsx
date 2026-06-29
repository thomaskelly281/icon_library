import { mdiScanner } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Scanner(props: IconComponentProps) {
  return <Icon path={mdiScanner} {...props} />;
}

export { mdiScanner as path };
