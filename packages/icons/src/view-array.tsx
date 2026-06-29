import { mdiViewArray } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewArray(props: IconComponentProps) {
  return <Icon path={mdiViewArray} {...props} />;
}

export { mdiViewArray as path };
