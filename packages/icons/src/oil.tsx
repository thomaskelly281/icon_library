import { mdiOil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Oil(props: IconComponentProps) {
  return <Icon path={mdiOil} {...props} />;
}

export { mdiOil as path };
