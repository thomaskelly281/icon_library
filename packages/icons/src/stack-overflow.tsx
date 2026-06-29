import { mdiStackOverflow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StackOverflow(props: IconComponentProps) {
  return <Icon path={mdiStackOverflow} {...props} />;
}

export { mdiStackOverflow as path };
