import { mdiFileArrowLeftRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileArrowLeftRight(props: IconComponentProps) {
  return <Icon path={mdiFileArrowLeftRight} {...props} />;
}

export { mdiFileArrowLeftRight as path };
