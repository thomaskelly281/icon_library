import { mdiTangram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tangram(props: IconComponentProps) {
  return <Icon path={mdiTangram} {...props} />;
}

export { mdiTangram as path };
