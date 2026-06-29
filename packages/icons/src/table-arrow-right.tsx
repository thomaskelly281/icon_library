import { mdiTableArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableArrowRight(props: IconComponentProps) {
  return <Icon path={mdiTableArrowRight} {...props} />;
}

export { mdiTableArrowRight as path };
