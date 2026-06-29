import { mdiMessageArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageArrowRight(props: IconComponentProps) {
  return <Icon path={mdiMessageArrowRight} {...props} />;
}

export { mdiMessageArrowRight as path };
