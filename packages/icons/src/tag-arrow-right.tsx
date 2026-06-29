import { mdiTagArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowRight(props: IconComponentProps) {
  return <Icon path={mdiTagArrowRight} {...props} />;
}

export { mdiTagArrowRight as path };
