import { mdiOcarina } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ocarina(props: IconComponentProps) {
  return <Icon path={mdiOcarina} {...props} />;
}

export { mdiOcarina as path };
