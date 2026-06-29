import { mdiHeadCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadCheck(props: IconComponentProps) {
  return <Icon path={mdiHeadCheck} {...props} />;
}

export { mdiHeadCheck as path };
