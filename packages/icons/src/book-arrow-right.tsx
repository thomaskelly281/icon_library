import { mdiBookArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowRight(props: IconComponentProps) {
  return <Icon path={mdiBookArrowRight} {...props} />;
}

export { mdiBookArrowRight as path };
