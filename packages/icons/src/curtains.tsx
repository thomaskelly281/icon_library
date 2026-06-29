import { mdiCurtains } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Curtains(props: IconComponentProps) {
  return <Icon path={mdiCurtains} {...props} />;
}

export { mdiCurtains as path };
