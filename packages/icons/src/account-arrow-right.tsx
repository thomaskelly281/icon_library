import { mdiAccountArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowRight(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowRight} {...props} />;
}

export { mdiAccountArrowRight as path };
