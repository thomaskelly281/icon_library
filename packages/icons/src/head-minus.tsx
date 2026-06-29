import { mdiHeadMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadMinus(props: IconComponentProps) {
  return <Icon path={mdiHeadMinus} {...props} />;
}

export { mdiHeadMinus as path };
