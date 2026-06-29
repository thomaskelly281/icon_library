import { mdiCarArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarArrowRight(props: IconComponentProps) {
  return <Icon path={mdiCarArrowRight} {...props} />;
}

export { mdiCarArrowRight as path };
