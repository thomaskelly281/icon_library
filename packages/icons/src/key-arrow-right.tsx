import { mdiKeyArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyArrowRight(props: IconComponentProps) {
  return <Icon path={mdiKeyArrowRight} {...props} />;
}

export { mdiKeyArrowRight as path };
