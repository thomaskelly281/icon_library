import { mdiEmailArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailArrowRight(props: IconComponentProps) {
  return <Icon path={mdiEmailArrowRight} {...props} />;
}

export { mdiEmailArrowRight as path };
