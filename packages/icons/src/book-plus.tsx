import { mdiBookPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookPlus(props: IconComponentProps) {
  return <Icon path={mdiBookPlus} {...props} />;
}

export { mdiBookPlus as path };
