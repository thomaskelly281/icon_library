import { mdiPlusBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusBox(props: IconComponentProps) {
  return <Icon path={mdiPlusBox} {...props} />;
}

export { mdiPlusBox as path };
