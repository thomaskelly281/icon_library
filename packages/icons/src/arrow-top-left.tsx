import { mdiArrowTopLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowTopLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowTopLeft} {...props} />;
}

export { mdiArrowTopLeft as path };
